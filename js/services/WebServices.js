/**
 * Created by mengtao on 2014/6/15.
 */
"use strict";

define(['angular'], function (angular) {
    console.log('Entered WebServices');

    var WebServices =
        function ($http) {

            return {
                userLogin: 'http://localhost:8080/lishibook-web/user/login'
                //userLogin: '/ws/user/login',
            }

        };
    return WebServices;
});