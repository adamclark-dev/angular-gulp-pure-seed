(function () {

    'use strict';

    angular.module('GlobalFilters')
        .filter('capitalise', capitaliseFilter);

    function capitaliseFilter() {
        return function(input, all) {
            return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
        }
    };

})();