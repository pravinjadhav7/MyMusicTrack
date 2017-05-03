angular.module('app').controller('addMusicController',['$scope','Musicapp', function($scope,Musicapp){

      $scope.musicapp = {
            
            "name": null,
            "rate": null,
      }
       $scope.sname = null;
       $scope.srate = null;


         

        $scope.addMusic = function(object){

            console.log($scope.sname,$scope.srate);
            var obj = {name:$scope.sname, rate: $scope.srate};
            Musicapp.create(obj)
            .$promise
            .then(function(response){
            })
            .catch(function(err){
            console.log(err);
            });
        };

}]);    