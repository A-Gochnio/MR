angular.module('monterail.test').service('auth',
	['storage', 'userList','$q', function(storage, userList, $q){
	
	var loginUserFn = function(username, password){
		var deferred = $q.defer();
		
		var storedUsers = userList.getUsers().then(function success(storedUsers){
			angular.forEach(storedUsers, function(user){
				if(user.name == username){
					if(password == 'showoff'){
						storage.storeLoggedUser({ username: username });
						deferred.resolve();
					} else {
						deferred.reject('Password is wrong. Should be: "showoff" ')
					}
				}
			});
			deferred.reject('No such user');
		}, function errorHandler(){
			deferred.reject('No such user');
		});
		
		return deferred.promise;
	}
	
	var isUserLoggedFn = function(){
		var isLogged = storage.getLoggedUser() != null;
		return isLogged;
	}
	
	var logUserOutFn = function(){
		storage.storeLoggedUser(null);
	}
	
	var getLoggedUserFn = function(){
		return storage.getLoggedUser();
	}
	return {
	
		loginUser: loginUserFn,
		isUserLogged: isUserLoggedFn,
		logUserOut: logUserOutFn,
		getLoggedUser: getLoggedUserFn
	
	}
	
}])