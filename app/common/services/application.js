
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