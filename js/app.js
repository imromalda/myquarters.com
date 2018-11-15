// $(document).ready(function() {

    
//   var readURL = function(input) {
//       if (input.files && input.files[0]) {
//           var reader = new FileReader();

//           reader.onload = function (e) {
//               $('.profile-pic').attr('src', e.target.result);
//           }
  
//           reader.readAsDataURL(input.files[0]);
//       }
//   }
  

//   $(".file-upload").on('change', function(){
//       readURL(this);
//   });
  
//   $(".upload-button").on('click', function() {
//      $(".file-upload").click();
//   });
// });

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
    // .when('/deposit',{
    //   templateUrl: 'deposit.html',
    //   controller: 'depositCtrl'
    // })
    // .when('/withdraw',{
    //   templateUrl: 'withdraw.html',
    //   controller: 'withdrawCtrl'
    // })
    // .when('/interest',{
    //   templateUrl: 'interest.html',
    //   controller: 'interestCtrl'
    // })

  $locationProvider.html5Mode(true);
  
});

//global variable
app.run(function($rootScope){
  $rootScope.username="Admin";
  $rootScope.balance=parseInt(500);
});


app.controller('initialPage', function($location)  {
  $location.path('login');
});

//login page and if/else statements and functions
app.controller('loginCtrl', function($scope, $location)  {
  $scope.formSubmit = function() {
    if($scope.uname === 'admin' && $scope.password === 'pass') {
      $location.path('menu');
    } else {
        alert('The username or password is not correct');
      }
  };
});

