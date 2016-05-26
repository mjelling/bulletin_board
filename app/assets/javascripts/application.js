var bulletinBoard = angular.module("Bulletin-Board", []);

bulletinBoard.controller("BulletinsController", ["$scope", "$http", function($scope, $http){
  $scope.renderBulletins = function(){
    $http.get('/api/bulletins').then(function(response){
      //pull an array of bulletins
      $scope.bulletins = response.data.bulletins;
      console.log("success on json request!");
    })
  };
  $scope.renderBulletins();

  $scope.deleteBulletin = function(bulletinID){
    $http.delete('/api/bulletins/'+ bulletinID).success(function(bulletinID){
      console.log('bulletin trashed')
    }).then(function(){
      $scope.renderBulletins();
    })
  };

  $scope.

}]);
