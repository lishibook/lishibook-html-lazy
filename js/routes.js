define([], function()
{
    return {
        defaultRoutePath: '/home',
        routes: {
            '/home': {
                templateUrl: 'views/home.html',
                dependencies: [
                    'controllers/HomeController'
                ]
            },
            '/about/:person': {
                templateUrl: 'views/about.html',
                dependencies: [
                    'controllers/AboutViewController',
                    'directives/app-color'
                ]
            },
            '/contact': {
                templateUrl: 'views/contact.html',
                dependencies: [
                    'controllers/ContactViewController'
                ]
            },
            '/login': {
                templateUrl: 'views/login.html',
                dependencies: [
                    'controllers/LoginController'
                ]
            },
            '/resource/:resourceId': {
                templateUrl: 'views/resource.html',
                dependencies: [
                    'controllers/ResourceController'
                ]
            }
        }
    };
});