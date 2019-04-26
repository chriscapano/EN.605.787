(function () {
    'use strict';
    angular.module('MenuApp').controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController (items) {
        var Ctrl = this;

        Ctrl.menu_items = items.data.menu_items;
        Ctrl.category = items.data.category;
    }
})();
