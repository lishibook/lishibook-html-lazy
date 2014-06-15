define(['routes','services/dependencyResolverFor', 'services/CurrentUser','services/WebServices', 'controllers/AppController'], function(config, dependencyResolverFor, currentuser,ws, appController)
{
    var app = angular.module('app', ['ngRoute','ngSanitize']);

    app.config(
    [
        '$routeProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
	        app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

            if(config.routes !== undefined)
            {
                angular.forEach(config.routes, function(route, path)
                {
                    $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                });
            }

            if(config.defaultRoutePath !== undefined)
            {
                $routeProvider.otherwise({redirectTo:config.defaultRoutePath});
            }
        }
    ]);

    app.factory('CurrentUser', currentuser);
    app.factory('WebServices', ws);

    app.controller('AppController', appController);

   return app;
});