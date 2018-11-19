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
    .when('/favorites',{
      templateUrl: 'favorites.html',
      controller: 'favoritesCtrl'
    })
  $locationProvider.html5Mode(true);
  
});

//global variable
app.run(function($rootScope){
  $rootScope.username="Admin";
  $rootScope.balance=parseInt(500);
});

//constant variable
app.constant("interest",0.05);

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
  $scope.formSubmit = function() {
    if($scope.uname === 'admin' && $scope.password === 'pass') {
      $location.path('news');
    } else {
        alert('The username or password is not correct');
      }
   };
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

//updating global variable to maintain balance
app.controller('decorCtrl', function($scope, $rootScope) {
  $scope.add=function(deposit) {
    $rootScope.balance=parseInt($scope.balance + deposit);
  }
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com");
  }
});

app.controller('lightingCtrl', function($scope, $rootScope) {
  $scope.sub=function(withdraw) {
    if(parseInt($scope.balance - withdraw)>0) {
      $rootScope.balance=parseInt($scope.balance - withdraw);
    } else {
      //Check to see if you are withdrawing more than you have
      alert("Please deposit money into your account.")
    }
  }
  $scope.goodbye= function(){
    alert("Thank you for checking out myquarters.com");
  }
});

app.controller('kitchenCtrl', function($scope, interest) {
  $scope.six=function() {
    $scope.sixMonths="$"+parseInt(($scope.balance * interest) * 6)+".00";
  }
  $scope.one=function() {
    $scope.oneYear="$"+parseInt(($scope.balance * interest) * 12)+".00";
  }
  $scope.five=function() {
    $scope.fiveYears="$"+parseInt(($scope.balance * interest) * 60)+".00";
  }
  $scope.ten=function() {
    $scope.tenYears="$"+parseInt(($scope.balance * interest) * 120)+".00";
  }
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