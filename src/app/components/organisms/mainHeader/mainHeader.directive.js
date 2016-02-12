export function MainHeaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/organisms/mainHeader/mainHeader.html'
  };

  return directive;
}
