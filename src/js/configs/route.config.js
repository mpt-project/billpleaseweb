export default ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: './templates/homepage.html',
        controller: 'mainCtrl'
    })
    .state('register', {
        url: '/register',
        templateUrl: './templates/register.html',
        controller: 'mainCtrl'
    })
    .state('panel', {
        url: '/panel',
        templateUrl: './templates/panel.html',
        controller: 'panelCtrl'
    });
};
