angular.module('myApp',['ngMessages'])
.controller('myCtrl',['$scope',function($scope){

    $scope.gender='female';
    $scope.reset=true;

  $scope.submit=function()
  {
      $scope.madlibform.$submitted=true;
      $scope.reset=false;
      
  };
    $scope.resetfunc=function()
   {
       $scope.madlibform.$submitted=false;
       $scope.reset=true;
   }
}]);