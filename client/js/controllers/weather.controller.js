angular.module('app.controllers').controller('WeatherCtrl',function($scope, WeatherFactory){
    $scope.call = function(city){
        if (city.split("").length > 2) {
            WeatherFactory.getWeather(city).then(function(response){
                if (response.data.query.results) {
                    $scope.place = response.data.query.results.channel;
                }
            },function(){

            })
        }
    }
});