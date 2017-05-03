angular.module('app').controller('musiclistController',['$scope','Musicapp', function($scope,Musicapp){
  
  
$scope.rating = 0;
 
   $scope.musicList = function(){
    Musicapp.find()
      .$promise
      .then(function(response){
        console.log(response);
        $scope.allMusics = response;
        
        $scope.ratings = [ {
        current: $scope.rate,
        max: 5
    }]; 
      })
      .catch(function(err){
        console.log(err);
      });
  };
  $scope.musicList();
}]);