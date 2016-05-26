var bulletinBoard = angular.module("Bulletin-Board", []);

bulletinBoard.controller("BulletinsController", ["$scope", "$http", function($scope, $http){
  $http.get('/api/bulletins').then(function(response){
    //pull an array of bulletins
    $scope.bulletins = response.data.bulletins;
    console.log("success on json request!");
  })
}])
