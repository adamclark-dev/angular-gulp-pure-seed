(function () {

    'use strict';

    angular.module('MOD_Blog', [])
        .controller('CTR_Blog', controller);

    function controller($scope, SVC_Blog) {

        $scope.sample_var = SVC_Blog.sampleFunction();

    };

})();