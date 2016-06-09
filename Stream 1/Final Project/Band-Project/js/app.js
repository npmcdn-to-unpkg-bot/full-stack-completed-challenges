// define our application
angular.module("bandApp", ['ngRoute', 'bandAppControllers', 'bandAppDirectives'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: "templates/home.html",
				controller: "HomeController"
			})
			.when('/our-music', {
				templateUrl: "templates/our-music.html",
				controller: "AudioController"
			})
			.when('/searchiTunes', {
				templateUrl: "templates/search-itunes.html",
				controller: "itunesController"
			})
			.otherwise({
				redirectTo: '/'
			});
	});