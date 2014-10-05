angular.module('monterail.test').controller('AgTableCtrl', 
	['$scope', 'utilities', function($scope, utilities){
	
		if($scope.rowsPerPage == null || !utilities.isNumber($scope.rowsPerPage)){
			$scope.rowsPerPage = 5;
		}
		
		$scope.orderId = $scope.columns[0].id;
		$scope.orderReverse = false;

	
		$scope.nextPage = function(){
			if($scope.currentPage < $scope.maxPages-1){
				$scope.currentPage++;
			}
		}
		
		$scope.prevPage = function(){
			if($scope.currentPage+1 > 0){
				$scope.currentPage--;
			}
		}
		
		$scope.selectPage = function(idx){
			$scope.currentPage = idx;
		}
		
		$scope.reorder = function(columnId){
			if(columnId == $scope.orderId){
				$scope.orderReverse = !$scope.orderReverse;
			} else {
				$scope.orderId = columnId;
				$scope.orderReverse = false;
			}
		}
		
		function recalculatePagination(rows){
			$scope.maxPages = Math.ceil( rows.length / $scope.rowsPerPage);
			$scope.pages = [];
			$scope.pages[$scope.maxPages-1] = undefined;
			$scope.currentPage = 0;
		}
		
		/*$scope.getNumber = function(i){
			return new Array(i);
		}*/
		
		$scope.$watchCollection('rows', function(rows){
		
			if(rows){				
				recalculatePagination(rows);
			}
				
		});
		
		$scope.$watchCollection('filteredRows', function(filteredRows){
			if(filteredRows){
				recalculatePagination(filteredRows);
			}
		});
		
		
}]);