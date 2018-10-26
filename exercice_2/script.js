var app = angular.module('myApp',[]);

app.controller('VoitureCtrl1', function($scope, $http) {
  $http.get('voitures.json')
  .then(function(response) {
      $scope.voitures = response.data;
  });
});
