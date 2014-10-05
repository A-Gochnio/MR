/**
 * This a simple reusable bootstrap table directive. It expects user to define columns array and pass matching rows array.
 **/
angular.module('monterail.test').directive('agTable', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'monterail/templates/agTable.html',
		scope: {
			columns: '=tableColumns',
			rows: '=tableRows',
			searchExpr: '=tableFilter',
			rowsPerPage: '@tableRowsVisible',
			isRowHighlightedCallback: '&tableIsRowHighlighted'
		},
		controller: 'AgTableCtrl'
	}
});