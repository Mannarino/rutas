angular.module('newsWiki', ['ngRoute'])
.config(function($routeProvider){
 	$routeProvider.when('/', {
		controller: 'NewsCtrl',
		templateUrl: 'app/partials/inicio.html'
	})
 
	.when('/deporte', {
		controller: 'DeporteCtrl',
		templateUrl: 'app/partials/deporte.html'
	})
 
	.when('/moda', {
		controller: 'ModaCtrl',
		templateUrl: 'app/partials/moda.html'
	})
 	
 	.when('/economia', {
		controller: 'EconomiaCtrl',
		templateUrl: 'app/partials/economia.html'
	})

 	.when('/politica', {
		controller: 'PoliticaCtrl',
		templateUrl: 'app/partials/politica.html'
	})

	.otherwise({
		redirectTo: '/'
	});
})