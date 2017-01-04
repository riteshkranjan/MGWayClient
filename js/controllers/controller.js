angular.module('MGWayClient')
.controller('functionController' ,function($http){
	var controller = this;
	$http({method: 'GET', url: 'http://localhost:9090/MGWayRest/getAllMetaData'})
	.success(function(data) {
		controller.functions = data;
	})

});