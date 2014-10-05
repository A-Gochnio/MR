angular.module('monterail.test').controller('TableCtrl', 
	['$scope', 'auth', '$state', 'userList',function($scope, authService, $state, userList){
		
		if(!authService.isUserLogged()){
			$state.go('login');
		}
		
		$scope.headers = [
				{ id: 'id', label: 'ID' }, 
				{ id: 'name', label: 'Name'},
				{ id: 'views', label: 'Views'},
				{ id: 'likes', label: 'Likes'},
				{ id: 'createdAt', label: 'Created at'}]
		
		$scope.addUser = function(){
			userList.generateUser($scope.newUserName);
			$scope.newUserName = '';
		}
		
		userList.getUsers().then(function success(usrs){
			$scope.userList = usrs;
		});
		
		
		
	
}]);