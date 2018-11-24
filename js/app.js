var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/login',{
      templateUrl: 'login.html',
      controller: 'loginCtrl'
    })
    .when('/news',{
      templateUrl: 'news.html',
      controller: 'newsCtrl'
    })
    .when('/bed',{
      templateUrl: 'bed.html',
      controller: 'bedCtrl'
    })
    .when('/decor',{
      templateUrl: 'decor.html',
      controller: 'decorCtrl'
    })
    .when('/lighting',{
      templateUrl: 'lighting.html',
      controller: 'lightingCtrl'
    })
    .when('/kitchen',{
      templateUrl: 'kitchen.html',
      controller: 'kitchenCtrl'
    })
    .when('/living',{
      templateUrl: 'living.html',
      controller: 'livingCtrl'
    })
    .when('/outdoor',{
      templateUrl: 'outdoor.html',
      controller: 'outdoorCtrl'
    })
    .when('/userPage',{
      templateUrl: 'userPage.html',
      controller: 'userPageCtrl'
    })
    .when('/pass',{
      templateUrl: 'pass.html',
      controller: 'passCtrl'
    })
    .when('/register',{
      templateUrl: 'register.html',
      controller: 'registerCtrl'
    })
  $locationProvider.html5Mode(true);
  
});

//global variable
app.run(function($rootScope){
  $rootScope.username="Admin";
});

app.controller('passCtrl', function($scope)  {
  $scope.formSubmit = function() {
    if($scope.uname === 'admin') {
      $scope.password="Your password is 'pass'";
    } else {
        $scope.password="Your username was not found.";
      }
  };
});

app.controller('registerCtrl', function($scope)  {
  // $scope.formSubmit = function() {
  //   if($scope.uname === 'admin') {
  //     $scope.password="Your password is 'pass'";
  //   } else {
  //       $scope.password="Your username was not found.";
  //     }
  // };
});

app.controller('initialPage', function($location)  {
  $location.path('login');
});

//login page and if/else statements and functions
app.controller('loginCtrl', function($scope, $location)  {
  $scope.formSubmit = function() {
    if($scope.uname === 'admin' && $scope.password === 'pass') {
      $location.path('news');
    } else {
        alert('The username or password is not correct');
      }
  };
});

//alerts for exiting the ATM
app.controller('newsCtrl', function($scope)  {
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com!");
  }
});

app.controller('bedCtrl', function($scope) {
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com!");
  }
});


app.controller('decorCtrl', function($scope, $rootScope) {
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com");
  }
});

app.controller('lightingCtrl', function($scope, $rootScope) {
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com");
  }
});

app.controller('kitchenCtrl', function($scope, interest) {
  $scope.goodbye= function(){
    alert("Thank you for checking out myyqaurters.com");
  }
});

app.controller('outdoorCtrl', function($scope) {
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com!");
  }
});

app.controller('livingCtrl', function($scope) {
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com!");
  }
});

app.controller('userPageCtrl', function($scope) {
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com!");
  }
});
