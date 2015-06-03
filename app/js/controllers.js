'use strict'

/* Controllers */

//set up a module called companyApp, and depends on nothing
var companyApp = angular.module('companyApp',[
	'ui.router'
])
 .config(function($stateProvider, $urlRouterProvider){
			$stateProvider
				.state('home', {
					url:'/home',
					templateUrl:'templates/home.html'
				})
				.state('companyList', {
					url:'/companyList',
					templateUrl:'templates/companyList.html',
					controller:'CompanyListCtrl'
				})
				.state('companyList.company',{
					url:'/:companyId',
					templateUrl:'templates/companyLogo.html',
					controller: function($scope, $stateParams) {

						/*
						alert($stateParams.companyId);
						alert("Length: "+$scope.companies.length);
						alert($scope.companies[0].url);
						*/
						var companyList = $scope.companies;
						for (var i = 0; i < companyList.length; i++){
							if($stateParams.companyId == companyList[i].id) {
								$scope.selectedUrl = companyList[i].url;
							}
						}

						/*
						var selectedId = $stateParams.companyId;

						_($scope.companies).each(function(company) {
							if (selectedId === company.id) {
								$scope.selectedUrl = company.url;
							}
						});*/
					}
				})
		})
	;


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
	};

	$scope.selectedCompany = function(selectedCompany){
		_($scope.companies).each(function(company){
			company.selected = false;
			if(selectedCompany === company) {
				selectedCompany.selected = true;
			}
		})
	};

}]);
