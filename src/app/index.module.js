/* global  */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { HomeController } from './views/home/home.controller';
import { WorkController } from './views/work/work.controller';
import { AboutController } from './views/about/about.controller';
import { BlogController } from './views/blog/blog.controller';
import { ServicesController } from './views/services/services.controller';
import { PricingController } from './views/pricing/pricing.controller';
import { LocaleService } from '../app/scripts/services/locale.service';
import { LogoDirective } from '../app/components/atoms/logo/logo.directive';
import { MainHeaderDirective } from '../app/components/organisms/mainHeader/mainHeader.directive';
import { NavbarDirective } from '../app/components/molecules/navbar/navbar.directive';
import { LanguageSelectDirective } from '../app/components/molecules/languageSelect/languageSelect.directive';

angular.module('unpixel', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'toastr', 'pascalprecht.translate', 'tmh.dynamicLocale'])
  .constant('LOCALES', {
    'locales': {
      'fr_FR': 'Français',
      'en_US': 'English'
    },
    'preferredLocale': 'fr_FR'
  })
  .config(config)
  .config(routerConfig)
  .config(function ($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
  })
  .config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'locales/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('fr_FR');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useLocalStorage();
  })
  .config(function (tmhDynamicLocaleProvider) {
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .run(runBlock)
  .controller('WorkController', WorkController)
  .controller('AboutController', AboutController)
  .controller('ServicesController', ServicesController)
  .controller('PricingController', PricingController)
  .controller('BlogController', BlogController)
  .controller('HomeController', HomeController)
  .service('localeService', LocaleService)
  .directive('logo', LogoDirective)
  .directive('mainHeader', MainHeaderDirective)
  .directive('navbar', NavbarDirective)
  .directive('languageSelect', LanguageSelectDirective);
