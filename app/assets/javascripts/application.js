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
    $('.bulletin').prepend($('<div>').addClass('box').attr('id', 'post_box').append($("<h3>").text("Input Your Name")).append($("<input>",
         { type:'text',
           name:'posted_by'
         }
     ).addClass('posted_by')).append($("<br>")).append($("<h3>").text("Post Content")).
     append($("<input>",
          { type:'text',
            name:'posted_content',
            width: '90%',
            height: '30em'
          }
      ).addClass('post_content')).append($("<br>")).
      append($('<button>').attr('ng-click', '"postBuulletin()"'))
    );
};
        //$("<input>",
          // { type:'submit',
            // value:"Submit",
             //ng-click: postBulletin()
          //}



  $scope.postBulletin = function(){
    var $postedBy = $('.posted_by').value;
    var $postContent = $('.posted_content').value;
    var newBulletin = {
      bulletin: {
        posted_by: $postedBy,
        post_content: $postContent
      }
    }
    $http.post('/api/bulletins', newBulletin)
   .success(function (newBulletin) {
   console.log("bulletin posted")
 }).then(function(){
   $scope.bulletin = {};
   $scope.renderBulletins();
   console.log('post function');
 })
}

}]);
