//JSON.parse(JSON.stringify([{ date: "2015/01/01", amount: 1000 },{ date: "2015/01/01", amount: 1000 }]))
angular
  .module("budgetApp", [])
  .controller("BudgetController", ["$scope", "$window", function($scope, $window) {
    $scope.data = [];

    $scope.addRecord = addRecord;

    $scope.loadBudget = loadBudget;
    $scope.savebudget = saveBudget;

    loadBudget();

    $scope.newRecord = {
      data: null, amount: null
    }

    // ---------------

    function loadBudget() {
      var storedBudget = $window.JSON.parse( $window.localStorage.getItem("budget") );
      if (storedBudget && storedBudget.length > 0) {
        console.log(storedBudget);
        $scope.data = storedBudget;
      }
    }

    function saveBudget() {
      $window.localStorage.setItem("budget", $window.JSON.stringify($scope.data));
    }

    function addRecord() {
      $scope.data.push( $scope.newRecord );

      saveBudget();

      $scope.newRecord = {
        data: null, amount: null
      }
    }

  }]);
