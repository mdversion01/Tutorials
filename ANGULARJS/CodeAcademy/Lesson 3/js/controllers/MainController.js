app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  $scope.fiveDay = forecast.success(function(data) { 
    $scope.fiveDay = data; 
  });
  
}]);