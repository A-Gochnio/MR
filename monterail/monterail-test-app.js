angular.module('monterail.test', ['ui.router', 'ui.utils'])
  .config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/login')
	
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl: 'monterail/templates/login.html',
			controller: 'LoginCtrl'
		})
		.state('table', {
			url: '/table',
			templateUrl: 'monterail/templates/tableView.html',
			controller: 'TableCtrl'
		})
}])