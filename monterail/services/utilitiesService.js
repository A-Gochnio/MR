angular.module('monterail.test').service('utilities', function(){
	
	function notEmpty(value){
		return value != null && value != '';
	}
	
	
	return{
		notEmpty: notEmpty
	}
});