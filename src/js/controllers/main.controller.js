export default ['$scope', '$http', '$state', 'userService', ($scope, $http, $state, userService) => {
	const API_HOST = 'http://77.55.230.115:3000';
	
	$scope.credentials = {};
	$scope.newUser = {};

	$scope.login = async function () {
		const userId = await userService.login($scope.credentials);

		if (userId) {
			$state.go('panel');
		} else {
			alert('incorrect login data');
		}
	}

	$scope.register = () => {
		const data = $scope.newUser;

		if (data.email && data.name && data.password && data.password_confirm && data.password === data.password_confirm) {
			$http.post(`${API_HOST}/register`, { email: data.email, name: data.name, password: data.password })
				.then(({ data }) => {
					$scope.newUser = {};
					$state.go('home');
				})
				.catch(e => {
					console.error('error', e);
				});
		}
	}
}];
