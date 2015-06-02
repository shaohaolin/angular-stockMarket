'use strict'

/* Controllers */

//set up a module called companyApp, and depends on nothing
var companyApp = angular.module('companyApp',[]);


//define a controller called CompanyListCtrl, using $scope as a gule.
companyApp.controller('CompanyListCtrl',['$scope', '$http', function($scope, $http) {
	$http.get('companies/companies.json').success(function(data) {
		$scope.companies = data;
	});

	$scope.orderProp = 'openPrice';

	$scope.buyStock = function(companyImgUrl) {
		alert("Company Image is " + companyImgUrl);
		$scope.selectedUrl = companyImgUrl;
	};

	$scope.sellStock = function(company) {
		alert("Company " + company);
		$scope.selectedCompany = company;
	}

}]);
