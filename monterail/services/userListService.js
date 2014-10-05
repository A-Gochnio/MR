angular.module('monterail.test').service('userList', ['storage', '$q', '$timeout',function(storage, $q, $timeout){
	
	var loadUsers = function(){
		var userlist = storage.getUserList();
		if(userlist.length == 0){
			userlist.push({ 
				id: 0,
				name: 'Waldemar Bolec',
				views: 123,
				likes: 52,
				createdAt: new Date()
			});
		}
		return userlist;
	}
	
	var addUserFn = function(user){
		users.push(user);
		storage.storeUserList(users);
	}
	
	var users = loadUsers();
	
	var generateUserFn = function(name){
		addUserFn({ 
				id: users.length,
				name: name,
				views: 123,
				likes: 52,
				createdAt: new Date()
			});
	}
	
	return{
		addUser: addUserFn,
		
		//it simulates a back-end API by returning a promise
		getUsers: function(){
			var deferred = $q.defer();
			
			$timeout(function(){
				deferred.resolve(users);
			}, 1000);
			
			return deferred.promise;
		},
		
		generateUser: generateUserFn,
	}
}]);