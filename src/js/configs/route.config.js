export default ($routeProvider, $locationProvider) => {
    $routeProvider
    .when('/', {
        templateUrl: './templates/homepage.html',
        controller: 'mainCtrl'
    })
    .when('/panel', {
        templateUrl: './templates/panel.html',
        controller: 'panelCtrl'
    })

    $locationProvider.html5Mode(true);
};
