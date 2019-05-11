(function () {
"use strict";

angular.module('public').controller('InfoController', InfoController);

InfoController.$inject = ['UserService', 'MenuService'];
function InfoController(UserService, MenuService) {
  var $ctrl = this;

  $ctrl.user = UserService.getUser();

  if ($ctrl.user) {
    MenuService.getMenuItem($ctrl.user.favorite).then(function (result) {
      $ctrl.menuItem = result;
    });
  }
}
})();
