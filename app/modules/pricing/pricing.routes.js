angular.module('routes')

    .config(function($stateProvider) {

        $stateProvider
            .state('pricing', {
                pageTitle: 'pricing',
                url: '/pricing',
                templateUrl: 'pricing/index.html',
                controller: 'CTR_Pricing'
            });

    });