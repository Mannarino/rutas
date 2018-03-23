angular.module('newsWiki', ['ngRoute'])
.config(function($routeProvider){
 	$routeProvider.when('/', {
		controller: 'NewsCtrl',
		templateUrl: 'partials/inicio.html'
	})
 
	.when('/Deporte', {
		controller: 'DeporteCtrl',
		templateUrl: 'partials/deporte.html'
	})
 
	.when('/Moda', {
		controller: 'ModaCtrl',
		templateUrl: 'partials/moda.html'
	})
 	
 	.when('/Economia', {
		controller: 'EconomiaCtrl',
		templateUrl: 'partials/economia.html'
	})

 	.when('/Politica', {
		controller: 'PoliticaCtrl',
		templateUrl: 'partials/politica.html'
	})

	.otherwise({
		redirectTo: '/'
	});
})