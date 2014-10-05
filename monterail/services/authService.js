angular.module('monterail.test').service('auth', 
	['storage', '$q', function(storage, $q){
	
	var loginUserFn = function(username, password){
		var deferred = $q.defer();
		
		if(password == 'monterail'){
			storage.storeLoggedUser({ username: username });
			deferred.resolve();
		} else {
			deferred.reject();
		}
		
		return deferred.promise;
	}
	
	var isUserLoggedFn = function(){
		var isLogged = storage.getLoggedUser() != null;
		return isLogged;
	}
	
	return {
	
		loginUser: loginUserFn,
		isUserLogged: isUserLoggedFn
	
	}
	
}])