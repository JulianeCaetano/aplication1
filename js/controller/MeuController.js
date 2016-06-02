myApp.controller("MeuController", function($scope){
	$scope.pessoa = {};
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

	$scope.enviaDados = function(pessoa){
			var minhaPessoa = angular.copy(pessoa);
			$scope.dados.push(minhaPessoa);
			$scope.pessoa = {};
	}
})