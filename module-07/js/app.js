(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
        var ctrl = this;

        ctrl.items = ShoppingListCheckOffService.getItemsToBuy();

        ctrl.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        var ctrl = this;

        ctrl.items = ShoppingListCheckOffService.getItemsBought();
    }

    ShoppingListCheckOffService.$inject = [];
    function ShoppingListCheckOffService() {
        var defaultBuyList = [
            { name: "cookies", quantity: 10 },
            { name: "ice cream", quantity: 3 },
            { name: "milk", quantity: 2 },
            { name: "napkins", quantity: 20 },
            { name: "whipped cream", quantity: 5 }
        ];

        var service = this;
        var itemsToBuy = defaultBuyList;
        var itemsBought = [];

        service.buyItem = function (itemIndex) {
            console.log("itemIndex: " + itemIndex);
            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };
    }

})();
