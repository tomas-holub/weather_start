angular.module('app.directives').directive('day', function(){
    return {
        restrict: 'E',
        template: '<div class="panel" ng-click="toggle()">' +
                        '<p>' +
                            '<strong>' +
                                '{{ forecast.day }} {{ forecast.date }}' +
                            '</strong>' +
                        '</p>' +
                        '<div ng-show="show">{{ forecast.text }}' +
                            '<p>H: {{ forecast.high }}&deg; | L: {{ forecast.low }}&deg;</p>' +
                       '</div>' +
                   '</div>',
        link: function(scope, elem) {
            scope.show = false;
            scope.toggle = function() {
                scope.show = !scope.show;
            }
        }
    }
});
