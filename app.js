(function() {

'use strict';
angular.module('myFirstApp',[])
.controller('MyFirstController', function($scope) {
  $scope.name = "Prabhat";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
