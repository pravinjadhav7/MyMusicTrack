angular.module('app').controller('generesController',['$scope','Generes', function($scope,Generes){

 
   $scope.genresList = function(){
    Generes.find()
      .$promise
      .then(function(response){
        console.log(response);
        $scope.allGeneres = response;
        })
      .catch(function(err){
        console.log(err);
      });
  };
  $scope.genresList();
}]);