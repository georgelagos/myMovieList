angular
	.module('movieApp')
	.controller('MovieCtrl', MovieCtrl);
	
	
function MovieCtrl(MovieData) {

	var vm = this;

	vm.movies = MovieData.get();
	
	
	vm.moveUp = function (index){
	
		if ( index != 0) {
			console.log("Index " + index + " Moving on up!");
			toMove = vm.movies.splice(index, 1);
			vm.movies.splice(index - 1, 0, toMove[0]);
		} else 
			console.log("Already at the top!");
	
	};

	vm.moveDown = function(index, movies){
	
		if (index != this.movies.length - 1) {
			console.log("Index " + index + " Moving on down!");
			toMove = vm.movies.splice(index, 1);
			vm.movies.splice(index + 1, 0, toMove[0]);
		} else
			console.log("Already at the bottom!");
	
	};


};
