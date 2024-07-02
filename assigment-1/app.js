(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.listLunch = "";
        $scope.message = "";
        $scope.classMessage = "";
        $scope.classInput = "";

        $scope.check = function() {
            let itemsLunch = $scope.listLunch.split(",");
            itemsLunch = itemsLunch.map(item => item.trim()).filter(item => item !== "");

            if (itemsLunch.length === 0) {
                $scope.message = "Please enter data first";
                $scope.classMessage = "invalid-message";
                $scope.classInput = "invalid-input";
            } else if (itemsLunch.length > 3) {
                $scope.message = "Too much!";
                $scope.classMessage = "valid-message";
                $scope.classInput = "valid-input";
            } else {
                $scope.message = "Enjoy!";
                $scope.classMessage = "valid-message";
                $scope.classInput = "valid-input";
            }
        }
    }
})();