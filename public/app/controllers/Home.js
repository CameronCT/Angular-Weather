app.controller('Home', ['$scope', '$location', function($scope, $location) {

	$scope.onSubmit = function(isValid) {
		if (isValid)
			$location.url('/city/' + $scope.city);
	}
}]);
