'use strict';

var mainAppModuleName = 'Main';
var mainAppModule = angular.module(mainAppModuleName, ['ui.router', 'core', 'users']);

angular.element(document).ready(function() {
	angular.bootstrap(document.querySelector('#mainApp'), [mainAppModuleName], {
		strictDi: true
	});
});

mainAppModule.controller('NameController', ['$scope', function($scope) {
	$scope.yourName = 'No Name1';
}]);

mainAppModule.filter('sayhello', function() {
	return function(name) {
		return 'Hello ' + name;
	}
});