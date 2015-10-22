var amazonApp = angular.module('amazonApp', ['ngRoute','amazonApp.services','amazonApp.directives'])

    amazonApp.config(function($routeProvider) {

            $routeProvider
                .when('/', {
                      controller: 'MainCtrl',
                      templateUrl: 'templates/main.html',
                })
                .otherwise({
                      redirectTo: '/'
                });

            window.onLoadCallback = function() {
                 // When the document is ready
              angular.element(document).ready(function() {
                    // Bootstrap the oauth2 library
                  gapi.client.load('oauth2', 'v2', function() {
                      // Finally, bootstrap angular app
                      angular.bootstrap(document, ['myApp']);
                          });
                    });
              }
});
