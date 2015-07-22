angular.module('app.controllers').controller('WeatherCtrl',function($scope, WeatherFactory, ImagesFactory){
    $scope.call = function(city){
        if (city.split("").length > 2) {
            WeatherFactory.getWeather(city).then(function(response){
                if (response.data.query.results) {
                    $scope.place = response.data.query.results.channel;
                }
            },function(){

            });
            
            ImagesFactory.load({q: city}, {}, function(data) {
                if (data.responseData.results) {
                    $scope.images = data.responseData.results;
                }   
            });
        }
    }
});