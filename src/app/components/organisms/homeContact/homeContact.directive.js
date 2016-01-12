export function HomeContactDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/organisms/homeContact/homeContact.html',
    scope: {},
    controller: HomeContactController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class HomeContactController {
  constructor($scope) {
    'ngInject';

    this.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

    this.$scope = $scope;

  }
}

HomeContactController.$inject = ["$scope"];
