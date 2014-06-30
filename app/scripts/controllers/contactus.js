'use strict';

angular.module('swFrontApp').controller('ContactusController', function($scope){
   $scope.send = function(){
   	if($scope.contactForm.$valid){
   		console.log("sending.. request");
   	} else{
   		$scope.contactForm.submitted = true;
   	}
   }
});