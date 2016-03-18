angular.module('crud', [])
  .controller('CrudController', ["$scope", "$http", function($scope, $http) {
    $http({method: "GET", 
           url: "/items"})
      .then(function(res){ 
        $scope.items = res.data;
      })

  }]);
