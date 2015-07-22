angular.module('app.directives').directive('images', function() {
    return {
        restrict: 'E',
        template: '<ul  class=" large-block-grid-1"><li ng-repeat="item in images track by item.imageId">' +
                        '<a ng-href="{{ item.url }}" title="{{ item.contentNoFormatting }}">' + 
                            '<img ng-src="{{ item.url }}">' +
                        '</a>' +
                  '</li></ul>',
        
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