angular.module('app.filters').filter('temperature', function(){
    return function(items, value) {
        if (items && value) {
            return items.filter(function(item){
                return item.high >= value;
            });
        }
        return items;
    }
});
