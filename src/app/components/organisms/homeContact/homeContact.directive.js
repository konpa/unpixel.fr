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
        "link": "https://plus.google.com/113781449538567698056",
        color: "#dc4e41"
      },
      {
        "name": "email",
        "link": "mailto:julien@unpixel.fr",
        "color": "#fbbc05"
      },
      {
        "name": "skype",
        "link": "skype:julien.monty?userinfo",
        "color": "#00aff0"
      },
      {
        "name": "facebook",
        "link": "https://www.facebook.com/unpxl/",
        "color": "#3b5998"
      },
      {
        "name": "twitter",
        "link": "https://twitter.com/1_pxl",
        "color": "#55acee"
      },
      {
        "name": "linkedin",
        "link": "https://www.linkedin.com/company/un-pixel",
        "color": "#0077b5"
      }
    ];

    // Typeform script
    var js,q,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}

    this.$scope = $scope;

  }
}

HomeContactController.$inject = ["$scope"];
