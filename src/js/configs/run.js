export default ['$transitions', '$state', '$trace', ($transitions, $state, $trace) => {

	/** Uncomment below for debug */
	// $trace.enable(1);

	$transitions.onError({}, ($transition$) => {
		if ($transition$.$to().name === 'home' && $transition$.$from().name === 'panel') {
			$state.go('home');
		}
	});

	 $state.defaultErrorHandler(error => {
	 	$state.go('home');
  	});
}];
