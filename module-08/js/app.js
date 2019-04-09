(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;

        controller.searchTerm = '';

        controller.onNarrowClicked = function() {

            if (isEmptyOrSpaces(controller.searchTerm)) {
                controller.found = [];
            } else {
                MenuSearchService.getMatchedMenuItems(controller.searchTerm.trim())
                    .then(function(results){
                        controller.found = results;
                    }).catch(function(error){
                    console.log('Error: ' + error);
                });
            }
        };

        controller.removeItem = function(index) {
            controller.found.splice(index, 1);
        };

        function isEmptyOrSpaces(str){
            return str === null || str.match(/^ *$/) !== null;
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json')
            }).then(function(result){
                var foundItems = [];

                result.data.menu_items.forEach(function(item){
                    if (item.description.includes(searchTerm)){
                        foundItems.push(item);
                    }
                });

                return foundItems;
            }).catch(function(error){
                console.log('Error: ' + error);
            })
        }
    }

    FoundItemsDirective.$inject = [];
    function FoundItemsDirective() {
        var ddo = {
            restrict : 'E',
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }

})();
