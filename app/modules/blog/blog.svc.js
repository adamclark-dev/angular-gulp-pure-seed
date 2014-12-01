(function () {

    'use strict';

    angular.module('MOD_Blog')
        .service('SVC_Blog', service);

    function service() {

        var fn = this;
            fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();