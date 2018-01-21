export default ['$transitions', '$state', '$trace', ($transitions, $state, $trace) => {

	$trace.enable(1);

	$transitions.onError({}, ($transition$) => {
		if ($transition$.$to().name === 'home' && $transition$.$from().name === 'panel') {
			$state.go('home');
		}
	});

	 $state.defaultErrorHandler(error => {
	 	$state.go('home');
  	});
}];
