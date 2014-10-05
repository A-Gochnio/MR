angular.module('monterail.test').filter('tableRowFilter', function(){
	
	var searchFn = function(searchVal, object){
		var found = false;
		angular.forEach(object, function(value, key){
			if(found == false){
				if(typeof value === 'object'){
					searchFn(searchVal, value);
				} else {
					if(searchVal == value){
						found = true;
					}
				}
			}
		});
		return found;
	}
	
	return function(input, term){
		
		if(term == null || term == ''){
			return input;
		}
	
		var output = [];
		angular.forEach(input, function(value, key){
			if(searchFn(term, value)){
				output.push(value);
			}
		});
		return output;
	}
});