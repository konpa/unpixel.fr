export function LogoDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/atoms/logo/logo.html'
  };

  return directive;
}
