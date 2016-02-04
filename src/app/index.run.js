export function runBlock ($log, $rootScope, cfpLoadingBar) {
  'ngInject';

  var deregistrationCallbackCfpLoadingBarStart = $rootScope.$on('$stateChangeStart', function() {
      cfpLoadingBar.start();
  });

  var deregistrationCallbackCfpLoadingBarComplete = $rootScope.$on('$stateChangeSuccess', function() {
      cfpLoadingBar.complete();
  });

  $rootScope.$on('$destroy', deregistrationCallbackCfpLoadingBarStart);
  $rootScope.$on('$destroy', deregistrationCallbackCfpLoadingBarComplete);

  $log.debug('runBlock end');
}
