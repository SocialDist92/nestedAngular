(function() {
    'use strict';

    angular
        .module('appOne')
        .controller('appOneController', appOneController);

    function appOneController() {
        var vm = this;
        vm.name = "app one here";
    }
}());