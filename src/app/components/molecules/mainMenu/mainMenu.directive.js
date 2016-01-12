export function MainMenuDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/molecules/mainMenu/mainMenu.html',
    scope: {},
    controller: MainMenuController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class MainMenuController {
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

MainMenuController.$inject = ["$scope"];
