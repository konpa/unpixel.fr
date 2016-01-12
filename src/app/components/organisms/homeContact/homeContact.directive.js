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
        latitude: 43.6062158,
        longitude: 2.2432363
      },
      zoom: 15
    };

    this.marker = {
      id: 0,
      coords: {
        latitude: 43.6062158,
        longitude: 2.2432363
      }
    };

    this.socials = [
      {
        "name": "google",
        "link": "#",
        color: "#dc4e41"
      },
      {
        "name": "email",
        "link": "#",
        "color": "#fbbc05"
      },
      {
        "name": "skype",
        "link": "#",
        "color": "#00aff0"
      },
      {
        "name": "facebook",
        "link": "#",
        "color": "#3b5998"
      },
      {
        "name": "twitter",
        "link": "#",
        "color": "#55acee"
      },
      {
        "name": "linkedin",
        "link": "#",
        "color": "#0077b5"
      }
    ];

    this.$scope = $scope;

  }
}

HomeContactController.$inject = ["$scope"];
