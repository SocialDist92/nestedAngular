(function() {
    'use strict';

    angular
        .module('mainApp')
        .controller('mainAppController', mainAppController);

    function mainAppController() {
        var vm = this;
        vm.name = "main app here";
    }
}());