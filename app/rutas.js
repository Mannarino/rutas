angular.module('newsWiki', ['ngRoute'])
.config(function($routeProvider){
 	$routeProvider.when('/', {
		controller: 'NewsCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/inicio.html'
	})
	$routeProvider.when('/deporte', {
		controller: 'DeporteCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/deporte.html'
	})
 
	$routeProvider.when('/moda', {
		controller: 'ModaCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/moda.html'
	})
 	
 	$routeProvider.when('/economia', {
		controller: 'EconomiaCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/economia.html'
	})

 	$routeProvider.when('/politica', {
		controller: 'PoliticaCtrl',
		controllerAs: "vm",
		templateUrl: 'app/partials/politica.html'
	})

	$routeProvider.otherwise({
		redirectTo: '/'
	});

	
})
