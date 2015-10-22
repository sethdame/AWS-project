var amazonApp = angular.module("amazonApp", ['ngRoute', 'amazonApp.services', 'amazonApp.directives'])
	
	amazonApp.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'MainCtrl',
				templateUrl: 'templates/main.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		window.onLoadCallback = function() {
			angular.element(document).ready(function() {
				gapi.client.load('oauth2', 'v2', function() {
					angular.bootstrap(document, ['amazonApp'])
				});
			});
		}
	});