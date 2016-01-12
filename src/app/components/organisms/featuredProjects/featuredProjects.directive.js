export function FeaturedProjectsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/organisms/featuredProjects/featuredProjects.html',
    scope: {},
    controller: FeaturedProjectsController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class FeaturedProjectsController {
  constructor ($scope) {
    'ngInject';

    this.projects = [
      {
        "title": "Wissame Cherfi Films",
        "description": "projects.wissameCherfiFilms.description",
        "slug": "wissame-cherfi-films",
        "textBgColor": "#F4F0F0",
        "imgBgColor": "#E5E5E5",
        "textColor": "#403A3E",
        "webpageImg": true
      },
      {
        "title": "Humans of Dublin",
        "description": "projects.humansOfDublin.description",
        "slug": "humans-of-dublin",
        "textBgColor": "#2FCFFF",
        "imgBgColor": "#2DC5F2",
        "textColor": "#FFFFFF",
        "webpageImg": false
      }
    ];

    this.$scope = $scope;
  }
}

FeaturedProjectsController.$inject = ["$scope"];
