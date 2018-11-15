var app= angular.module("myApp",[]);
app.controller("SigninCtrl", function($scope, $http,$filter,$controller,$window) {

    $scope.sigin=false;
    $scope.signup=false;  
    $scope.username="";
    $scope.password="";
    $scope.security="";
    $scope.clientToken="";  //generated from server
    $scope.clientSecret="";  //genereated from server
    $scope.loading=false;
    $scope.message="";
    $scope.error="";
    //$scope.unknownError=false;
     
    var urlSuccess="http://localhost/quarters/news.html";//page to redirect on successful sigin
    var apiUrl="http://localhost:3001/project/v1/user/"; //url for api


    $scope.login = function() {
       // console.log( $scope.username);
        //console.log( $scope.password);
        var res = $http({url: apiUrl+'login',method: 'POST',data:{"username":$scope.username,"password":$scope.password}});

        res.success(function(data, status, headers, config) {
            $window.location.href=urlSuccess;
        });

        res.error(function(data, status, headers, config) {
            //console.log(data);
            $scope.status = 'error';
            $scope.error =data.message;
        });
    };
    $scope.sigup = function() {
        var res = $http({url: apiUrl+'register',method: 'POST',data:{"username":$scope.username,"password":$scope.password,"security":$scope.security}});

        res.success(function(data, status, headers, config) {

            //this.status=

            // console.log(data);
            // $window.location.href=urlSuccess;
        });

        res.error(function(data, status, headers, config) {
            //console.log(data);
            $scope.status = 'error';
            $scope.error =data.message;
        });
    };
    $scope.forget = function() {
        var res = $http({url: apiUrl+'forgotpassword',method: 'POST',data:{"username":$scope.username,"security":$scope.security}});

        res.success(function(data, status, headers, config) {

            //this.status=

            // console.log(data);
            // $window.location.href=urlSuccess;
        });

        res.error(function(data, status, headers, config) {
            //console.log(data);
            $scope.status = 'error';
            $scope.error =data.message;
        });
    };


    // noinspection JSAnnotator
   /* $scope.login() = function () {

            console.log( $scope.username);
            console.log( $scope.password);

            console.log('lets check if sigin function is working');
           // $window.location.href = "http://localhost:8088/Cab/index.html";
       };*/


    //function for logout and to remove saved cookie
    //    $scope.logout = function () {
    //
    //        $window.location.href = "http://localhost:8088/Cab/index.html";
    //    };                
});

