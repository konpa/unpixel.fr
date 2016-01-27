export function PricingDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/organisms/pricing/pricing.html',
    scope: {},
    controller: PricingController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class PricingController {
  constructor($scope) {
    'ngInject';

    this.pricingList = [
      {
        "slug": "cms",
        "image": "aiklein_browser.png",
        "price": {
          "core": 490,
          "maintenance": 420
        },
        "features": ["fast", "price", "admin"]
      },
      {
        "slug": "onePage",
        "image": "unpixel_browser.png",
        "price": {
          "core": 980,
          "maintenance": 210
        },
        "features": ["design", "actual", "fast"]
      },
      {
        "slug": "admin",
        "image": "wissame-cherfi-films_browser.png",
        "price": {
          "core": 2450,
          "maintenance": 840
        },
        "features": ["design", "complex", "admin"]
      }
    ];

    this.currentPricing = "monthly";
    this.maintenance = "true";

    // Typeform script
    var js,q,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}

    this.$scope = $scope;

  }
}

PricingController.$inject = ["$scope"];
