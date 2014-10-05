angular.module('monterail.test').service('storage', [function(){
	
	var storeObject = function(key, value){
		localStorage.setItem(key, JSON.stringify(value));
	}
	
	var retrieveObject = function(key){
		var serializedItem = localStorage.getItem(key);
		if(serializedItem != null && serializedItem != ''){
			return JSON.parse(serializedItem);
		}
		return null;
	}
	
	var storeLoggedUserFn = function(userObj){
		storeObject('currentUser', userObj);
	}
	
	var getLoggedUserFn = function(){
		return retrieveObject('currentUser');
	}
	
	var getUserListFn = function(){
		var userlist = retrieveObject('userList');
		if(!userlist){
			userlist = [];
		}
		return userlist;
	}
	
	var storeUserListFn = function(userlist){
		storeObject('userList', userlist);
	}
		
	return {
		storeLoggedUser: storeLoggedUserFn,
		getLoggedUser: getLoggedUserFn,
		getUserList: getUserListFn,
		storeUserList: storeUserListFn
	}
}]);