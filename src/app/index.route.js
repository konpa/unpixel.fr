export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('work', {
      url: '/work',
      templateUrl: 'app/views/work/work.html',
      controller: 'WorkController',
      controllerAs: 'work'
    })
    .state('services', {
      url: '/services',
      templateUrl: 'app/views/services/services.html',
      controller: 'ServicesController',
      controllerAs: 'services'
    })
    .state('pricing', {
      url: '/pricing',
      templateUrl: 'app/views/pricing/pricing.html',
      controller: 'PricingController',
      controllerAs: 'pricing'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/views/about/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'app/views/blog/blog.html',
      controller: 'BlogController',
      controllerAs: 'blog'
    });
}
