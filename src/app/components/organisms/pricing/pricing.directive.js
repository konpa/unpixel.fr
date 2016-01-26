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
        "price": 490,
        "features": ["fast", "price", "admin"]
      },
      {
        "slug": "onePage",
        "image": "unpixel_browser.png",
        "price": 980,
        "features": ["design", "actual", "fast"]
      },
      {
        "slug": "admin",
        "image": "wissame-cherfi-films_browser.png",
        "price": 2450,
        "features": ["design", "complex", "admin"]
      }
    ];

    this.$scope = $scope;

  }
}

PricingController.$inject = ["$scope"];
