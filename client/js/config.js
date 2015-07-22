angular.module('app').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('app',{
            url: '/',
            abstract: true,
            views: {
                'header@': {
                    templateUrl: '../views/partial-header.html',
                },
                'left' : {
                    templateUrl: '../views/partial-weather.html',
                    controller: 'WeatherCtrl as weather'
                },
                'right' : {
                    templateUrl: '../views/right.html'
                }
            }
        })
        .state('app.welcome', {
            url: '',
            views: {
                'right@': {
                    templateUrl: '../views/partial-welcome.html'
                },
            }
        })
        .state('app.detail', {
            url: 'detail',
            views: {
                'right@': {
                    templateUrl: '../views/partial-detail.html'
                }
            }
        })
});

angular.module('app').config(function($httpProvider){
    //$httpProvider.interceptors.push();
});