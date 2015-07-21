var app = angular.module('app',[
    'ui.router',
    'app.controllers',
    'app.services',
    'app.directives',
    'app.filters'
]);
angular.element(document).ready(function(){
    angular.bootstrap(document,['app']);
});