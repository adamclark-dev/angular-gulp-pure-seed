angular.module('routes')

    .config(function($stateProvider) {

        $stateProvider
            .state('email', {
                pageTitle: 'Email',
                url: '/email',
                templateUrl: 'email/index.html',
                controller: 'CTR_Email'
            });

    });