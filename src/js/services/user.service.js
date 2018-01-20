export default ['$http', ($http) => {
	const API_HOST = 'http://77.55.230.115:3000';

	const userService = {};

	userService.user = undefined;

	userService.login = credentials => {
		userService.message = '';
		$http.post(`${API_HOST}/login`, credentials)
			.then(({ data }) => {
				console.log(data);
				userService.user = data;
			})
			.catch(e => {
				console.log(e);
			})
	};

	userService.logout = () => {
		userService.user = undefined;
	}

	return userService;
}];
