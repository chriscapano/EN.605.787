(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchOrder = "";
        $scope.checkerMessage = "";
        $scope.orderValid = false;
        $scope.neverClicked = true;

        $scope.onCheckOrderClicked = function() {
            $scope.neverClicked = false;
            if (!$scope.lunchOrder) {
                $scope.orderValid = false;
                $scope.checkerMessage = "Please enter data first";
            } else {
                $scope.orderValid = true;
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
