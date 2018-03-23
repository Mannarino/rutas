angular.module('newsWiki', ['ngRoute'])
.config(function($routeProvider){
 	$routeProvider.when('/', {
		controller: 'NewsCtrl',
		templateUrl: 'app/partials/inicio.html'
	})
 
	.when('/Deporte', {
		controller: 'DeporteCtrl',
		templateUrl: 'app/partials/deporte.html'
	})
 
	.when('/Moda', {
		controller: 'ModaCtrl',
		templateUrl: 'app/partials/moda.html'
	})
 	
 	.when('/Economia', {
		controller: 'EconomiaCtrl',
		templateUrl: 'app/partials/economia.html'
	})

 	.when('/Politica', {
		controller: 'PoliticaCtrl',
		templateUrl: 'app/partials/politica.html'
	})

	.otherwise({
		redirectTo: '/'
	});
})