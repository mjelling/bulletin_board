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

  $scope.launchNewBox = function(){
    $('#post_box').toggle();
    console.log('hiding')
  }
        //$("<input>",
          // { type:'submit',
            // value:"Submit",
             //ng-click: postBulletin()
          //}



  $scope.postBulletin = function(){
    var $postedBy = $('.posted_by').val();
    var $postContent = $('.post_content').val();
    //console.log($postedBy);
    var newBulletin = {
      bulletin: {
        posted_by: $postedBy,
        post_content: $postContent
      }
    };
    console.log(newBulletin)
    $http.post('/api/bulletins', newBulletin)
  .then(function(response){
   $scope.bulletin = {};
   $scope.launchNewBox();
   $scope.renderBulletins();
   console.log('post function');
 })
}

}]);
