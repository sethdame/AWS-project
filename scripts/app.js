angular.module('amazonApp', ['ngRoute', 'amazonApp.services', 'amazonApp.directives'])
	
.config(function(AWSServiceProvider) {
	AWSServiceProvider
		.setArn('arn:aws:iam::435001563040:role/seth-aws-role');
})

.config(function(StripeServiceProvider) {
	StripeServiceProvider.setPublishableKey('YOURKEY')
})

.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: 'templates/main.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

window.onLoadCallback = function() {					//bootstraps oauth2 library
	angular.element(document).ready(function() {		//and bootraps app
		gapi.client.load('oauth2', 'v2', function() {
			angular.bootstrap(document, ['amazonApp'])
		});
	});
}