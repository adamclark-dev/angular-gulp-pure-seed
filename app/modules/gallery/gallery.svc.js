(function () {

    'use strict';

    angular.module('MOD_Gallery')
        .service('SVC_Gallery', service);

    function service() {

        var fn = this;
        fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();