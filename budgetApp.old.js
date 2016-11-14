angular
  .module("budgetApp", [])
  .controller("BudgetController", ["$scope", function($scope) {
    $scope.myBudget = 1000;

    $scope.increaseBudget = function() {
      $scope.myBudget += 1000;
    }
    $scope.showMyText = function() {
      alert($scope.myText);
    }
  }]);
