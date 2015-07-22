angular.module('app.services').factory('ImagesFactory', function($resource){
    return $resource('//ajax.googleapis.com/ajax/services/search/images',{},{
        load: { 
            method: 'JSONP', 
            params: { v: '1.0', callback: 'JSON_CALLBACK',imgsz:'medium' }
        } 
    });
});