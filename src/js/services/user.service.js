export default ['$http', ($http) => {
	const API_HOST = 'http://77.55.230.115:3000';

	const userService = {};

	userService.user = undefined;

	userService.login = credentials => {
		return new Promise(resolve => {
			$http.post(`${API_HOST}/login`, credentials)
				.then(({ data }) => {
					userService.user = data.id;
					return resolve(userService.user);
				})
				.catch(e => {
					return resolve(null);
				})
		})
	};

	userService.logout = () => {
		userService.user = undefined;
	}

	return userService;
}];
