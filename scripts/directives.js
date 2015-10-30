angular.module('amazonApp.directives', [])

	.directive('googleSignin', function() {
  		return {
		    restrict: 'A',
		    template: '<span id="signinButton"></span>',
		    replace: true,
		    scope: {
		      afterSignin: '&'
    		},
    	link: function(scope, ele, attrs) {            
	      attrs.$set('class', 'g-signin');					// Sets standard google class
	      
	      attrs.$set('data-clientid', 						// Sets the clientid
	          attrs.clientId+'.apps.googleusercontent.com');
	 
	      var scopes = attrs.scopes || [					// builds scope urls
	        'auth/plus.login', 
	        'auth/userinfo.email'
	      ];

	      var scopeUrls = [];

	      for (var i = 0; i < scopes.length; i++) {
	        scopeUrls.push('https://www.googleapis.com/' + scopes[i]);
	      };

	      var callbackId = "_googleSigninCallback",			// Creates a custom callback method
	          directiveScope = scope;
	      window[callbackId] = function() {
	        var oauth = arguments[0];
	        directiveScope.afterSignin({oauth: oauth});
	        window[callbackId] = null;
	      };

	      attrs.$set('data-callback', callbackId);			// Sets standard google signin button settings
	      attrs.$set('data-cookiepolicy', 'single_host_origin');
	      attrs.$set('data-requestvisibleactions', 'http://schemas.google.com/AddActivity')
	      attrs.$set('data-scope', scopeUrls.join(' '));

	      // Reloads the client library to 
	      // force the button to be painted in the browser
	      (function() {
	       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	       po.src = 'https://apis.google.com/js/client:plusone.js';
	       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	      })();
	    }
	}
});

.directive('fileUpload', function() {
	return {
		restrict: 'A',
		scope: {
			fileUpload: '&'
		},
		template: '<input type="file" id="file" /> ',
		replace: true,
		link: function(scope, ele, attrs) {
			ele.blind('change', function() {
				var file = ele[0].files;
				if (file) {
					scope.fileUpload({files: file});
				}
			})
		}
	}
})