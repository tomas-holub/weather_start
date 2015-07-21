angular.module('app.filters').filter('temperature', function(){
    return function(items, highest, lowest) {
        var highest = highest || 100;
        var lowest  = lowest  || -100;
        if (items) {
            return items.filter(function(item){
                return (item.high <= highest) && (item.low > lowest) ;
            });
        }
        return items;
    }
});
