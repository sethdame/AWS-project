var app = angular.module('amazonApp.services', []);

	app.factory('UserService', function($q, $http) {
		var service = {
			_user: null,
			setCurrentUser: function(u) {
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
				d.resolve(service._user);
				return d.promise;
			}
		};
		return service;
	});
// 846873793970-j7c4d0js0plo31e88rvm3vi17itf7dcf.apps.googleusercontent.com
// miFgtkW56tIhZfdO5DwZjDpi