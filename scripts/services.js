var app = angular.module('amazonApp.services', []);

	app.factory('UserService', function($q, $http) {
		var service = {
			_user: null,
			setCurrentUser: function(u) {			//sets currentUser as a permanent fixture
				if (u && !u.error) {
					service._user = u;
					return service.currentUser();	
				} else {								
					var d = $q.defer();
					d.reject(u.error);
					return d.promise;
				}
			},
			currentUser: function() {
				var d = $q.defer();
				if (service._user) {
					d.resolve(service._user);
				} else {
					gapi.client.oauth2.userInfo.get()
					.execute(function(e) {
						service._user = e;
					})
				}
				return d.promise;
			}
		};
		return service;
	});
	app.provider('AWSService', function() {
		var self = this;
		self.arn = null;

		self.setArn = function(arn) {
			if (arn) self.arn = arn;
		}

		self.$get = function($q) {
			return {}
		}
	})
// 846873793970-j7c4d0js0plo31e88rvm3vi17itf7dcf.apps.googleusercontent.com
// miFgtkW56tIhZfdO5DwZjDpi