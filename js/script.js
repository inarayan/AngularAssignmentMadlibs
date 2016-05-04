angular.module('myApp',['ngMessages'])
.controller('myCtrl',['$scope', function($scope){

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

       $scope.female_name=undefined;
       $scope.dirty_task=undefined;
       $scope.obnoxious_celebrity=undefined;

       $scope.celebrity=undefined;
       $scope.job_title=undefined;

       $scope.huge_number=undefined;
       $scope.useless_skill=undefined;
       $scope.tedious_task=undefined;
       $scope.adjective=undefined;

   };


}]);