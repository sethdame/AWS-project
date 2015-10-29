var app = angular.module('amazonApp')

	app.controller('MainCtrl', function($scope) {
		$scope.signedIn = function(oauth) {
			$scope.user = oauth;
		}
});