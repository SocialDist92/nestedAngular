(function() {
    'use strict';

    angular
        .module('appTwo')
        .controller('appTwoController', appTwoController);

    function appTwoController() {
        var vm = this;
        vm.name = "app two here";
    }
}());