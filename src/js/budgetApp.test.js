var expect = chai.expect;

describe("Testing budgetApp", function() {
  var $window = Object.create(window);

  beforeEach(function() {
    module("budgetApp", function($provide) {
     $provide.value('$window', $window);
    });

    $window.localStorage = (function() {
      var storage = null;
      return {
        setItem: function(key, value) { storage = value; },
        getItem: function(key) { return storage; }
      }
    })();
  });

  describe("Testing BudgetController", function() {
    it.skip("it exists", inject( function($controller) {
      var ctrlr = $controller('BudgetController', { $scope: {} });
      expect(ctrlr).to.exist;
    }));

    it.skip("addRecord() works as intended", inject( function($controller) {
      var $scope = {};
      var ctrlr = $controller('BudgetController', { "$scope": $scope });

      expect($scope.addRecord).to.be.a("function");
      expect($scope.newRecord).to.be.an("object");
      expect($scope.data).to.be.empty;

      $scope.newRecord.date = "2000/01/01";
      $scope.newRecord.amount = 100;
      $scope.addRecord();

      expect($scope.data).to.be.not.empty;
    }));

    it("stores data in localStorage", inject( function($controller) {
      var budgetData = '[{ "date": "2016/01/09", "amount": 1000 }]';
      $window.localStorage.setItem("budget", budgetData);
      var ctrlr = $controller('BudgetController', { $scope: {}, $window: $window });

      console.log($window.localStorage.getItem("budget"));
      expect($window.localStorage.getItem("budget")).to.equal(budgetData);
    }));

    it("it restores data from localStorage");
  });

});
