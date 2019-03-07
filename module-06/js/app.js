(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchOrder = "";
        $scope.checkerMessage = "";

        $scope.onCheckOrderClicked = function() {
            if (!$scope.lunchOrder) {
                $scope.checkerMessage = "Please enter data first";
            } else {
                var lunchItems = $scope.lunchOrder.split(',');
                if (lunchItems.length <= 3) {
                    $scope.checkerMessage = "Enjoy!";
                } else {
                    $scope.checkerMessage = "Too Much!";
                }
            }
        }
    }
})();
