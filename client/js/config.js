angular.module('app').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app',{
            url: '/',
            abstract: true,
            views: {
                'header' : {
                    templateUrl: '../views/header.html'
                },
                'left' : {
                    templateUrl: '../views/left.html'
                },
                'right' : {
                    templateUrl: '../views/right.html'
                }
            }
        })
        .state('app.welcome', {
            url: '',
            views: {
                'left@': {
                    templateUrl: '../views/partial-weather.html',
                    controller: 'WeatherCtrl as weather'
                },
                'right@': {
                    templateUrl: '../views/partial-welcome.html'
                },
                'header@': {
                    templateUrl: '../views/partial-header.html'
                }
            }
        })
});

angular.module('app').config(function($httpProvider){
    //$httpProvider.interceptors.push();
});