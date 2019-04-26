(function () {
    'use strict';
    angular.module('MenuApp').config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories.template.html',
                controller: 'CategoriesController as Ctrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/categories/{categoryShortName}/items',
                templateUrl: 'templates/items.template.html',
                controller: 'ItemsController as Ctrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                    }]
                }
            })
    }
})();
