    
var app= angular.module("BoloApp",[]);
app.controller("SignupCtrl", function($scope, $http,$filter,$window) {

    
    $scope.signup=false;  
    $scope.username="";
    $scope.password="";
    $scope.validKey=false;
    $scope.unknownError=false;
    var urlSuccess="http://localhost:8088/Cab/demo.html";//page to redirect on successful sigin
    var apiUrl="http://localhost:8088/boloCab/bolokey/"; //url for api
    
   
    //function for customer signup details
    $scope.customerSignupDetails= function(){	
              
    var res = $http({url: apiUrl+'customerSignUp',method: 'POST',data:'{"REQUEST":{"REQUEST_BODY":{"BL_CUST_NAME":"'+$scope.name+'","BL_CUST_EMAIL_ID":"'+$scope.email+'","BL_CUST_PASSWORD":"'+$scope.password+'","BL_CUST_LANDMARK":"'+$scope.landmark+'","BL_CUST_ADDRESS":"'+$scope.address+'","BL_CUST_CITY":"'+$scope.city+'","BL_CUST_COUNTRY":"'+$scope.country+'","BL_CUST_PINCODE":"4117","BL_CUST_PHOTO":"drive","BL_CUST_MOB_NO":"'+$scope.mobile+'","BL_CUST_ALT_MOB_NO":"'+$scope.alt_mob+'","LT_TIMESTAMP":"123","LT_TIMEZONE":"ist","LT_LAT":"23.01","LT_LONG":"12.35","BL_CUST_TOKEN_TYPE":"0","BL_CUST_LOGIN_BY":"0","BL_CUST_LOGIN_FROM":"2","BL_CUST_BROWSER_DETAILS":"chrome"}}}'});
                                                                                                            
        res.success(function(data, status, headers, config) {
                           
            $window.location.href=urlSuccess;                 
        });
             
	res.error(function(data, status, headers, config) {
              
         });		
		
   };
        
   
                 
     
});


