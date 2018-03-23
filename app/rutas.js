angular.module('newsWiki', ['ngRoute'])
.config(function($routeProvider){
 	$routeProvider.when('/', {
		controller: 'NewsCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/inicio.html'
	})
 
	.when('/deporte', {
		controller: 'DeporteCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/deporte.html'
	})
 
	.when('/moda', {
		controller: 'ModaCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/moda.html'
	})
 	
 	.when('/economia', {
		controller: 'EconomiaCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/economia.html'
	})

 	.when('/politica', {
		controller: 'PoliticaCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/politica.html'
	})

	.otherwise({
		redirectTo: '/'
	});

	
})