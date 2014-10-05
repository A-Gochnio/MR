angular.module('monterail.test').service('utilities', function(){
	
	function notEmptyFn(value){
		return value != null && value != '';
	}
	
	function isNumberFn(value){
		return !isNaN(value);
	}
	
	
	return{
		notEmpty: notEmptyFn,
		isNumber: isNumberFn
	}
});