angular.module('routes')

    .config(function($stateProvider) {

        $stateProvider
            .state('gallery', {
                pageTitle: 'Gallery',
                url: '/gallery',
                templateUrl: 'gallery/index.html',
                controller: 'CTR_Gallery'
            });

    });