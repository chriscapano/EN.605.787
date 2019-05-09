(function () {
"use strict";

angular.module('public').controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.processSignUp = function () {
    if ($ctrl.user.favorite) {
      MenuService.getMenuItem($ctrl.user.favorite).then(function (result) {
        UserService.saveUser($ctrl.user);
        $ctrl.invalidFavorite = false;
        $ctrl.success = true;
      }, function (error) {
        $ctrl.invalidFavorite = true;
        $ctrl.success = false;
      })
    } else {
      $ctrl.invalidFavorite = true;
      $ctrl.success = false;
    }
  }
}
})();
