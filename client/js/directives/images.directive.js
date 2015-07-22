angular.module('app.directives').directive('images', function() {
    return {
        restrict: 'E',
        template: '<p ng-repeat="item in images track by item.imageId">' +
                        '<a ng-href="{{ item.url }}" title="{{ item.contentNoFormatting }}">' + 
                            '<img ng-src="{{ item.tbUrl }}">' +
                        '</a>' +
                  '</p>',
        
        link: function(scope, el) {
            scope.$watch(function() {
                if (scope.$$prevSibling) {
                    scope.images = scope.$$prevSibling.images;
                } else if (scope.$$nextSibling) {
                    scope.images = scope.$$nextSibling.images;
                }
            }); 
        }
    }
});