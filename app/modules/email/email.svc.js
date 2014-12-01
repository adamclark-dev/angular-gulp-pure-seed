(function () {

    'use strict';

    angular.module('MOD_Email')
        .service('SVC_Email', service);

    function service() {

        var fn = this;
        fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();