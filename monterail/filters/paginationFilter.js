angular.module('monterail.test').filter('paginationFilter', function(){
	
	return function(input, currentPage, rowsPerPage){
		var newRows = [];
			
		if(input){
			var offset = rowsPerPage*currentPage;
			for(var i = 0; i < rowsPerPage; i++){
			
				if(input[offset+i]){
					newRows.push(input[offset+i]);
				} else break;
			}
			return newRows;
		}
		return input;
	}
});