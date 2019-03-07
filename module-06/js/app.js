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
                var reducedItems = lunchItems.reduce(reduceCallBack, {valid: 0, empty: 0});

                if (reducedItems.valid <= 0) {
                    $scope.orderValid = false;
                    $scope.checkerMessage = "Only Empty Items Entered!";
                } else if (reducedItems.valid <= 3) {
                    $scope.checkerMessage = "Enjoy!";
                } else {
                    $scope.checkerMessage = "Too Much!";
                }
            }
        };

        function reduceCallBack(accumulator, currentValue) {
            if (currentValue.trim() === "") {
                accumulator.empty = accumulator.empty + 1;
            } else {
                accumulator.valid = accumulator.valid + 1;
            }

            return accumulator;
        }
    }
})();
