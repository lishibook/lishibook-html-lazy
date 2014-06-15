define(['app'], function(app)
{
    app.controller('HomeController',
        [
            '$scope',

            function($scope)
            {
                console.log("Enter HomeController");
                $scope.page =
                {
                    heading: 'Welcome'
                };
            }
        ]);
});