//IFFE
(function () {
    angular.module("bank")
    .controller("bankController", bankController)
    .filter('subarnaNameChange', customFilter);

    bankController.injector = ['$scope', 'subarnaNameChangeFilter'];

    function bankController($scope, subarnaNameChangeFilter) { 
        $scope.alert = function alertMsg() {
                ret = subarnaNameChangeFilter();
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
