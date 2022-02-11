//IFFE
(function () {
    angular.module("bank")
    .controller("bankController", bankController)
    .filter('subarnaNameChange', customFilter);

    bankController.inject = ['$scope', 'subarnaNameChangeFilter'];

    function bankController($scope, subarnaNameChangeFilter) { 
        $scope.nameChangeAlert = function alertMsg() {
                ret = subarnaNameChangeFilter($scope.name);
                if(ret)
                    return "He is not " + $scope.name + ",  he is " + ret;
                else
                    return "";
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
