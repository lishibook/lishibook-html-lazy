/**
 * Created by Administrator on 2014/6/14.
 */
define(['app'], function(app){
    "use strict";

    app.controller('ResourceController',[
        '$scope',
        '$http',
        '$routeParams',

        function ($scope,$http, $routeParams) {

            console.log("Enter ResourceController");

            $scope.resourceId = $routeParams.resourceId;
            var baseUrl = '/ws/resource/' + $scope.resourceId;
            $http.get(baseUrl).success(function(data){
                $scope.resource = data;
            });

        }
    ]);
});