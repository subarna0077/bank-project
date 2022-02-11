//IFFE
(function () {
    angular.module("bank")
    .controller("bankController", bankController)
    .filter('subarnaNameChange', customFilter);

    bankController.injector = ['$scope', 'subarnaNameChangeFilter'];

    function bankController($scope, subarnaNameChangeFilter) { 
        $scope.changeSubarnaName = function change() {
                $scope.alert = subarnaNameChangeFilter($scope.subarnaName);
        };
    }

    function customFilter(){
        return function(input) {
            input = input || '';
            if (input === "Suman")
                input = "Subarna";
            return input;
        };
    }
})();