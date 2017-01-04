angular.module('MGWayClient').config(function($routeProvider){
	$routeProvider.when('/demo',{
		templateUrl:'/template/pages/demo.html'
		controller: 'functionController'
	})
	.when('/design',{
		templateUrl:'/template/pages/design.html'
	})
	.otherwise({redirectTo:'/'})
});