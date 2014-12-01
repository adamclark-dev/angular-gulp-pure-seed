(function () {

    'use strict';

    angular.module('MOD_Landing')
        .service('SVC_Landing', service);

    function service() {

        var fn = this;
        fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();