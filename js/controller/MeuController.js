myApp.controller("MeuController", function($scope){
	$scope.pessoa = {};
	$scope.isEdit = false;

	$scope.dados = [{
		nome : 'Juliane Caetano',
		telefone : '(11)3333-1212',
		email : 'juliane@gmail.com'
	},{
		nome : 'Caetano Bantian',
		telefone : '(11)3333-1212',
		email : 'caetano@gmail.com'
	},{
		nome : 'Teste Freds',
		telefone : '(46)9999999',
		email : 'teste@gmail.com'
	}];

//Salvar os dados
	$scope.enviaDados = function(pessoa){

		if ($scope.isEdit) {
			$scope.atualizarDados(pessoa);
		}else{
			var minhaPessoa = angular.copy(pessoa);
			$scope.dados.push(minhaPessoa);
			//$scope.pessoa = {};
			delete $scope.pessoa;
		}
	}


//Função para exclui dados
	$scope.excluirDados = function(item){
		$scope.dados.splice(item,1);
	}


//Editar os dados
	$scope.editarDados = function(item, idx){
		$scope.pessoa = angular.copy(item);
		$scope.idx = idx;
		$scope.isEdit = true;

	}

//Atualizar dados
	$scope.atualizarDados = function(data){
		$scope.isEdit = false;
		$scope.dados[$scope.idx] = angular.copy(data);
		delete $scope.pessoa;
	}

})

