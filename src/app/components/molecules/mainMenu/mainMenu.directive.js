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

    // Typeform script
    var js,q,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}

    this.$scope = $scope;
  }
}

MainMenuController.$inject = ["$scope"];
