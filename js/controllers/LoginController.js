/**
 * Created by mengtao on 2014/6/14.
 */

define(['app'], function(app){

    app.controller('LoginController',[
        '$scope',
        '$http',
        '$location',
        '$window',
        'WebServices',
        function($scope, $http, $location, $window, ws) {
            console.log("Enter LoginController");

            $scope.email="";
            $scope.password="";
            $scope.rememberme=false;
            $scope.loginfail=false;
            $scope.submit = function(){
                //var baseUrl = 'http://localhost:8080/lishibook-web/user/login';
                //var baseUrl = '/ws/user/login';
                var baseUrl = ws.userLogin;
                console.log(baseUrl);

                var postData = {'email': $scope.email, 'password': $scope.password};
                $http.post(baseUrl, postData).success(function(data){
                    if(data.status==-1){
                        $scope.loginfail=true;
                    }else if(data.status == 1){
                        $scope.loginfail = false;
                        //goto home immediately for name to be refreshed.
                        $window.location.href = '';
                        //$location.path('/home');
                    }
                }).error(function(data){
                    $scope.loginfail=true;
                });
            }

        }
    ]);

});