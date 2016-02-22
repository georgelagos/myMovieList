angular
	.module('movieApp')
	.factory('MovieData', MovieData);

function MovieData(){
	
	return {get: getMovieData};

};

function getMovieData () {

	var MovieData = {};
	
	MovieData = [{"title":"The Shawshank Redemption","year":"1994","urlPoster":"images/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UY67_CR0,0,45,67_AL_.jpg","idIMDB":"tt0111161","rating":"9.2","ranking":1},
	{"title":"The Godfather","year":"1972","urlPoster":"images/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_UX45_CR0,0,45,67_AL_.jpg","idIMDB":"tt0068646","rating":"9.2","ranking":2},
	{"title":"The Godfather: Part II","year":"1974","urlPoster":"images/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_UX45_CR0,0,45,67_AL_.jpg","idIMDB":"tt0071562","rating":"9.0","ranking":3},
	{"title":"The Dark Knight","year":"2008","urlPoster":"images/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg","idIMDB":"tt0468569","rating":"8.9","ranking":4},
	{"title":"Pulp Fiction","year":"1994","urlPoster":"images/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UY67_CR0,0,45,67_AL_.jpg","idIMDB":"tt0110912","rating":"8.9","ranking":5},
	{"title":"Schindler's List","year":"1993","urlPoster":"images/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_UX45_CR0,0,45,67_AL_.jpg","idIMDB":"tt0108052","rating":"8.9","ranking":6},
	{"title":"12 Angry Men","year":"1957","urlPoster":"images/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_UX45_CR0,0,45,67_AL_.jpg","idIMDB":"tt0050083","rating":"8.9","ranking":7},
	{"title":"The Lord of the Rings: The Return of the King","year":"2003","urlPoster":"images/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_UY67_CR0,0,45,67_AL_.jpg","idIMDB":"tt0167260","rating":"8.9","ranking":8},
	{"title":"The Good, the Bad and the Ugly","year":"1966","urlPoster":"images/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX45_CR0,0,45,67_AL_.jpg","idIMDB":"tt0060196","rating":"8.9","ranking":9},
	{"title":"Fight Club","year":"1999","urlPoster":"images/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_UY67_CR0,0,45,67_AL_.jpg","idIMDB":"tt0137523","rating":"8.8","ranking":10}];

	return MovieData;
};
