export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/molecules/navbar/navbar.html',
    scope: {},
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ($scope) {
    'ngInject';

    this.menu = [
      "work",
      "services",
      "pricing",
      "about",
      "blog"
    ];

    this.$scope = $scope;
  }
}

NavbarController.$inject = ["$scope"];
