'use strict';

define(['services/CurrentUser'], function (currentuser) {
    console.group('AppController Entered.')

    var AppController = ['$scope', 'CurrentUser', function ($scope,CurrentUser) {

        $scope.loginstate=false;
        CurrentUser.get().success(function(data){
            $scope.current_user = data.info;
            if($scope.current_user && $scope.current_user.email){
                $scope.loginstate = true;
            }
        });


    }];
    console.groupEnd();
    return AppController;
});