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

    this.all = {
      "wissame-cherfi-films": {
        "title": "Wissame Cherfi Films",
        "description": "projects.wissameCherfiFilms.description",
        "slug": "wissame-cherfi-films",
        "link": "http://www.wissamecherfi.com",
        "link_text": "projects.seeWebsite",
        "textBgColor": "#f2b207",
        "imgBgColor": "#e6a805",
        "textColor": "#f3f3f3",
        "webpageImg": true
      },
      "humans-of-dublin": {
        "title": "Humans of Dublin",
        "description": "projects.humansOfDublin.description",
        "slug": "humans-of-dublin",
        "link": "https://www.behance.net/gallery/28503753/Humans-of-Dublin-Logo-Design",
        "link_text": "projects.seeProject",
        "textBgColor": "#2FCFFF",
        "imgBgColor": "#2DC5F2",
        "textColor": "#FFFFFF",
        "webpageImg": false
      },
      "devicon": {
        "title": "Devicon",
        "description": "projects.devicon.description",
        "slug": "devicon",
        "link": "http://devicon.fr/",
        "link_text": "projects.seeWebsite",
        "textBgColor": "#63d095",
        "imgBgColor": "#5abc86",
        "textColor": "#FFFFFF",
        "webpageImg": true
      },
      "VPwordmark": {
        "title": "VP wordmark",
        "description": "projects.VPwordmark.description",
        "slug": "VPwordmark",
        "link": "https://www.behance.net/gallery/28118593/Photographer-Wordmark-Logo-Redesign",
        "link_text": "projects.seeProject",
        "textBgColor": "#464646",
        "imgBgColor": "#333333",
        "textColor": "#FFFFFF",
        "webpageImg": false
      },
      "aiklein": {
        "title": "AIKlein",
        "description": "projects.aiklein.description",
        "slug": "aiklein",
        "link": "http://aiklein.com/",
        "link_text": "projects.seeWebsite",
        "textBgColor": "#ff8b07",
        "imgBgColor": "#ff730e",
        "textColor": "#f3f3f3",
        "webpageImg": true
      },
      "healme": {
        "title": "Healme",
        "description": "projects.healme.description",
        "slug": "healme",
        "link": "http://healme.ie/",
        "link_text": "projects.seeWebsite",
        "textBgColor": "#a582ba",
        "imgBgColor": "#9172a2",
        "textColor": "#f3f3f3",
        "webpageImg": true
      }
    };

    this.featured = [
      this.all["wissame-cherfi-films"],
      this.all["humans-of-dublin"]
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
