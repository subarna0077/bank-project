//IFFE
(function () {
    "use strict";
    angular.module("bank", [])
    .controller("bankController", bankController)
    .filter("subarnaNameChange", customFilter);

    bankController.inject = ["$scope", "subarnaNameChangeFilter"];

    function bankController($scope, subarnaNameChangeFilter) { 
        $scope.nameChangeAlert = function alertMsg() {
                var ret = subarnaNameChangeFilter($scope.name);
                if(ret == "Subarna")
                    return "He is not " + $scope.name + ",  he is " + ret;
                else
                    return "";
        };
    }

    function customFilter(){
        return function(input) {
            input = input || '';
            input = input.toLowerCase();
            if (input === "suman")
                input = "Subarna";
            return input;
        };
    }
})();
