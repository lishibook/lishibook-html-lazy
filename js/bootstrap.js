"use strict";

require.config({
    baseUrl: 'js',
    paths: {
		'angular': ['//cdnjscn.b0.upaiyun.com/libs/angular.js/1.2.16/angular', '../libs/angular/angular'],
		'angular-route': ['//cdnjscn.b0.upaiyun.com/libs/angular.js/1.2.16/angular-route', '../libs/angular/angular-route'],
        'angular-sanitize': ['//cdnjscn.b0.upaiyun.com/libs/angular.js/1.2.16/angular-sanitize', '../libs/angular/angular-sanitize'],
		'jquery': ['//cdnjscn.b0.upaiyun.com/libs/jquery/1.8.3/jquery', '../libs/jquery/jquery']
    },
	shim: {
        'angular': {
            exports: 'angular'
        },
		'angular-route': {
			deps: ['angular']
		},
        'angular-sanitize': {
            deps: ['angular']
        },
        'app': {
            deps: ['angular', 'angular-route']
        }
	}
});

require
(
    [
        'angular',
        'angular-route',
        'angular-sanitize',
        'app'
    ],
    function(angular)
    {
        angular.bootstrap(document, ['app']);
    }
);