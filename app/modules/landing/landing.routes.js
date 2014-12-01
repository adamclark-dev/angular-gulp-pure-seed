angular.module('routes')

    .config(function($stateProvider) {

        $stateProvider
            .state('landing', {
                pageTitle: 'Landing',
                url: '/landing',
                templateUrl: 'landing/index.html',
                controller: 'CTR_Landing'
            });

    });