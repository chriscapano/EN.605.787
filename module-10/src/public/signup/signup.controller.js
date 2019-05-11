(function () {
"use strict";

angular.module('public').controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.menuItem;

  $ctrl.processSignUp = function () {
    UserService.saveUser($ctrl.user);
    $ctrl.success = true;
  };

  $ctrl.blur = function () {
    if ($ctrl.user && $ctrl.user.favorite) {
      MenuService.getMenuItem($ctrl.user.favorite).then(function (result) {
        $ctrl.invalidFavorite = false;
        $ctrl.menuItem = result;
      }, function (error) {
        $ctrl.invalidFavorite = true;
        $ctrl.menuItem = null;
      })
    } else {
      $ctrl.invalidFavorite = true;
      $ctrl.menuItem = null;
    }
  };

}
})();
