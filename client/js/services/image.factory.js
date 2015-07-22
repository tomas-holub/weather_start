angular.module('app.services').factory('ImageFactory', function($http){
    return {
        getImageByCity: function(city) {



            return $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f8744b702f07fa11a59b9fec82ead4b3&tags=" + city + "&format=json&nojsoncallback=1&api_sig=222b776678976a8e9c7afe23da23b38d")
                .then(function(result){
                    if (result.data.photos) {
                        return result.data.photos.photo[0].id;
                    }
                    return null;
                })
                .then(function(id){
                    console.log(id);
                    return $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=f8744b702f07fa11a59b9fec82ead4b3&photo_id=" + id + "&format=json&nojsoncallback=1&api_sig=bf5239fc885fe4059754074ca3132eec");
            })

        }
    }
});