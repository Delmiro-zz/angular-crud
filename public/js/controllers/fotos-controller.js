angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
 	$scope.meuFiltro = '';
 	$scope.mensagem='';

 

	$http.get('v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro){
		console.log(erro);
	});

	$scope.remover = function(foto){
		$http.delete('v1/fotos/' + foto._id).
			success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = foto.titulo  + ' foi removido com sucesso';
		}).error(function(erro){
			console.log(erro);
			$scope.mensagem = "Nao foi possível remover a foto" + foto.titulo;
		})
	}

});