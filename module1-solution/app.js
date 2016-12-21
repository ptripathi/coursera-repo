(function() {

'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foodlist = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {

    var arrayItems = $scope.foodlist.split(',')
    if ($scope.foodlist == "") {
    $scope.message = "Please enter data first";
    } else if (arrayItems.length <= 3) {
     $scope.message = "Enjoy!";
   } else {
     $scope.message = "Too much!";
   }
  };
}

})();
