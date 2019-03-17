function MainController($scope) {
  $scope.name = 'Mirna!';
}


//keep at the bottom
angular
  .module('app')
  .controller('MainController', MainController);
