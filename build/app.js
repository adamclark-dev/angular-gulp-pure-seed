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
(function () {

    'use strict';

    angular.module('routes', ['ui.router'])
        .config(defaultRoute);

    function defaultRoute($urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

    };

})();
angular.module('GlobalDirectives', []);
angular.module('GlobalFilters', []);
angular.module('GlobalServices', []);
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

(function () {

    angular.module('GlobalServices')
        .service('application', service);

    function service($state, toaster, Restangular) {

        var vm = this;
            vm.defineErrorHandler = defineErrorHandler;
            vm.setPageTitle = setPageTitle;

        /* --------------------------------------------------------------------------- */

        function defineErrorHandler(){

            Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
                toaster.pop('information', response.status + ' ERROR', response.data.error.type);
                console.log(response);
            });

        };

        function setPageTitle(){

            document.title = $state.current.pageTitle + ' | Sample App';

        };

    };

})();
(function () {

    'use strict';

    angular.module('MOD_Blog', [])
        .controller('CTR_Blog', controller);

    function controller($scope, SVC_Blog) {

        $scope.sample_var = SVC_Blog.sampleFunction();

    };

})();
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
(function () {

    'use strict';

    angular.module('MOD_Blog')
        .service('SVC_Blog', service);

    function service() {

        var fn = this;
            fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();
(function () {

    'use strict';

    angular.module('MOD_Email', [])
        .controller('CTR_Email', controller);

    function controller($scope, SVC_Email) {

    };

})();
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
(function () {

    'use strict';

    angular.module('MOD_Email')
        .service('SVC_Email', service);

    function service() {

        var fn = this;
        fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();
(function () {

    'use strict';

    angular.module('MOD_Gallery', [])
        .controller('CTR_Gallery', controller);

    function controller($scope, SVC_Gallery) {

    };

})();
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
(function () {

    'use strict';

    angular.module('MOD_Landing', [])
        .controller('CTR_Landing', controller);

    function controller($scope, SVC_Landing) {

    };

})();
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
(function () {

    'use strict';

    angular.module('MOD_Landing')
        .service('SVC_Landing', service);

    function service() {

        var fn = this;
        fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();
(function () {

    'use strict';

    angular.module('MOD_Pricing', [])
        .controller('CTR_Pricing', controller);

    function controller($scope, SVC_Pricing) {

    };

})();
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
(function () {

    'use strict';

    angular.module('MOD_Pricing')
        .service('SVC_Pricing', service);

    function service() {

        var fn = this;
        fn.sampleFunction = sampleFunction;

        function sampleFunction(){

            return 'Introducing Pure';

        }

    };

})();