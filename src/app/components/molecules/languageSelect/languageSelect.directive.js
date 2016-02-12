export function LanguageSelectDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/molecules/languageSelect/languageSelect.html',
    scope: {},
    controller: LanguageSelectController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class LanguageSelectController {
  constructor($scope, localeService) {
    'ngInject';

    this.currentLocaleDisplayName = localeService.getLocaleDisplayName();
    this.localesDisplayNames = localeService.getLocalesDisplayNames();
    this.visible = this.localesDisplayNames && this.localesDisplayNames.length > 1;

    this.changeLanguage = function(locale) {
      localeService.setLocaleByDisplayName(locale);
      this.currentLocaleDisplayName = localeService.getLocaleDisplayName();
    };

    this.$scope = $scope;
  }
}

LanguageSelectController.$inject = ["$scope", "localeService"];
