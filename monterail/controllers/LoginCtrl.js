angular.module('monterail.test').controller('LoginCtrl', 
	['$scope', 'auth', 'utilities',  '$state',
	function($scope, authService, utils, $state){
		
	$scope.validators = utils;
	
	$scope.submit = function(){
		
		$scope.loginErrorMsg = '';
		
		authService.loginUser($scope.username, $scope.password)
			.then(function success(){
				$state.go('table');
			}, function fail(reason){
				$scope.loginErrorMsg = reason;
			});
	}
		
}]);