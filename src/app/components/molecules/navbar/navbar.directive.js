import Slideout from 'slideout';

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
  constructor ($scope, $document) {
    'ngInject';

    this.menu = [
      "work",
      "services",
      "pricing",
      "about",
      "blog"
    ];

    var slideout = new Slideout({
      'panel': $document[0].getElementById('panel'),
      'menu': $document[0].getElementById('menu'),
      'padding': 256,
      'tolerance': 70,
      'side': 'right'
    });

    this.toggleMenu = function() {
      slideout.toggle();
    };

    this.$scope = $scope;
  }
}

NavbarController.$inject = ["$scope", "$document"];
