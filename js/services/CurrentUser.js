/**
 * Created by mengtao on 2014/6/10.
 */
"use strict";

define(['angular'], function (angular) {
    console.group('CurrentUser Entered.')
    var CurrentUser = function ($http) {

        var baseUrl = 'http://localhost:8080/lishibook-web/user/get';
        //var baseUrl = '/ws/user/get';

        return {
            get: function(){
                return $http.get(baseUrl);
            }
        }

    };
    console.groupEnd();
    return CurrentUser;
});