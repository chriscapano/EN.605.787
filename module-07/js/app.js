(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('TripleDollar', TripleDollarFilter);

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

        ctrl.itemPrice = function (itemIndex) {
            var item = ctrl.items[itemIndex];
            return item.quantity * item.pricePerItem;
        }
    }

    ShoppingListCheckOffService.$inject = [];
    function ShoppingListCheckOffService() {
        var defaultBuyList = [
            { name: "cookies", quantity: 10, pricePerItem: 5 },
            { name: "ice cream", quantity: 3, pricePerItem: 7 },
            { name: "milk", quantity: 2, pricePerItem: 3 },
            { name: "napkins", quantity: 20, pricePerItem: 1 },
            { name: "whipped cream", quantity: 5, pricePerItem: 2 }
        ];

        var service = this;
        var itemsToBuy = defaultBuyList;
        var itemsBought = [];

        service.buyItem = function (itemIndex) {
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

    function TripleDollarFilter() {
        return function (input) {
            return "$$$" + input;
        }
    }

})();
