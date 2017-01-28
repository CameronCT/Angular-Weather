app.controller('Home', ['$scope', '$location', function($scope, $location) {

	$scope.onSubmit = function() {
		$location.url('/city/' + $scope.city);
	}
}]);
