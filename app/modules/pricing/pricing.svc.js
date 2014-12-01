(function () {

    'use strict';

    angular.module('MOD_Pricing')
        .service('SVC_Pricing', service);

    function service() {

        var fn = this;
        fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();