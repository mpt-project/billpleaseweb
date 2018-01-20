export default ['$scope', '$http', '$state', 'userService', ($scope, $http, $state, userService) => {
	const API_HOST = 'http://77.55.230.115:3000';
	
	$scope.credentials = {};
	$scope.newUser = {};

	$scope.login = () => {
		userService.login($scope.credentials);
	}

	$scope.register = () => {
		const data = $scope.newUser;

		if (data.email && data.name && data.password && data.password_confirm && data.password === data.password_confirm) {
			$http.post(`${API_HOST}/register`, { email: data.email, name: data.name, password: data.password })
				.then(({ data }) => {
					console.log(data);
					$scope.newUser = {};
					$scope.go('login')
				})
				.catch(e => {
					console.log('error', e);
				});
		}
	}
}];
