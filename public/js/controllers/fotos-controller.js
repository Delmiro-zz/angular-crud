angular.module('alurapic').controller('FotosController', function($scope, recursoFoto ) {
	
	$scope.fotos = [];
 	$scope.meuFiltro = '';
 	$scope.mensagem='';

 	recursoFoto.query(function(fotos){
 		$scope.fotos = fotos;
 	}, function(erro){
 		console.log(erro)
 	});

	$scope.remover = function(foto){

		recursoFoto.delete({fotoId: foto._id}, function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = foto.titulo  + ' foi removido com sucesso';
		}, function(erro){
			console.log(erro);
			$scope.mensagem = "Nao foi possível remover a foto" + foto.titulo;
		})
	}

});