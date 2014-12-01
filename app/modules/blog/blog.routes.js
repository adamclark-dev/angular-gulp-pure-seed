angular.module('routes')

.config(function($stateProvider) {

    $stateProvider
        .state('blog', {
            pageTitle: 'Blog',
            url: '/',
            templateUrl: 'blog/index.html',
            controller: 'CTR_Blog'
        });

});