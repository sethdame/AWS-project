var app = angular.module('amazonApp')

	app.controller('MainCtrl', function($scope) {
		$scope.signedIn = function(oauth) {
			UserService.setCurrentUser(oauth)
				.then(function(user) {
					$scope.user = user;
				});
		}
});