export function HomeServicesDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/organisms/homeServices/homeServices.html',
    scope: {},
    controller: HomeServicesController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class HomeServicesController {
  constructor($scope) {
    'ngInject';

    this.icons = [
      {
        "title": "Search",
        "img": "search"
      },
      {
        "title": "Ideas",
        "img": "idea"
      },
      {
        "title": "Draw",
        "img": "draw"
      },
      {
        "title": "Tools",
        "img": "tools"
      },
      {
        "title": "Settings",
        "img": "settings"
      },
      {
        "title": "Plane",
        "img": "plane"
      },
    ];

    this.$scope = $scope;

  }
}

HomeServicesController.$inject = ["$scope"];
