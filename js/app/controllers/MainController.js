function MainController($scope) {
  $scope.name = 'diane';
}

angular
  .module('app')
  .controller('MainController', MainController);
