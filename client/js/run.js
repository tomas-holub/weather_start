angular.module('app').run(function ($state,$rootScope) {
    $rootScope.$state = $state;
});
