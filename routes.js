/* router.js*/
angular.module('myApp')
.config([ '$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/app/', {
			templateUrl:'modules/appDashboard/appDashboard.html',
			controller: 'DashboardCtrl'
		})
	}
	]);