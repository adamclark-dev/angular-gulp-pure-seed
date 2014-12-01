(function () {

    'use strict';

    angular.module('routes', ['ui.router'])
        .config(defaultRoute);

    function defaultRoute($urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

    };

})();