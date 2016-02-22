angular.module('movieApp').directive('topTenMovies', topTenMovies);

function topTenMovies () {

	return {
	
		restrict: 'E',
	
		templateUrl: 'movieApp.html'
	}
}