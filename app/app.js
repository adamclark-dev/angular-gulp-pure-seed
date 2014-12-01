var modules          =     ['GlobalDirectives',
                            'GlobalFilters',
                            'GlobalServices',
                            'routes',
                            'templates',
                            'MOD_Blog',
                            'MOD_Email',
                            'MOD_Gallery',
                            'MOD_Landing',
                            'MOD_Pricing'];

var dependencies     =     ['ngAnimate',
                            'ngCookies',
                            'ngSanitize',
                            'restangular',
                            'toaster'];

angular.module('www', dependencies.concat(modules))

.config(function($locationProvider, $compileProvider) {

	$locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);

})

.run(function (application, $rootScope) {

    application.defineErrorHandler();
    application.setPageTitle();

    $rootScope.$on('$stateChangeSuccess', function(event) {

        application.setPageTitle();

    });

});