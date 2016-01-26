export function ProjectsDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/organisms/projects/projects.html',
    scope: {
      show: '='
    },
    controller: ProjectsController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class ProjectsController {
  constructor ($scope) {
    'ngInject';

    this.all = [
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

    this.featured = [
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

    if(this.show == 'all') {
      this.projects = this.all;
    }
    else if (this.show == 'featured') {
      this.projects = this.featured;
    }

    this.$scope = $scope;
  }
}

ProjectsController.$inject = ["$scope"];
