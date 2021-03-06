export function LocaleService($translate, LOCALES, $rootScope, tmhDynamicLocale, $log, $document) {
  'ngInject';

  // PREPARING LOCALES INFO
  var localesObj = LOCALES.locales;

  // locales and locales display names
  var _LOCALES = Object.keys(localesObj);
  if (!_LOCALES || _LOCALES.length === 0) {
    $log.error('There are no _LOCALES provided');
  }
  var _LOCALES_DISPLAY_NAMES = [];
  _LOCALES.forEach(function(locale) {
    _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
  });

  // STORING CURRENT LOCALE
  var currentLocale = $translate.proposedLanguage(); // because of async loading

  // METHODS
  var checkLocaleIsValid = function(locale) {
    return _LOCALES.indexOf(locale) !== -1;
  };

  var setLocale = function(locale) {
    if (!checkLocaleIsValid(locale)) {
      $log.error('Locale name "' + locale + '" is invalid');
      return;
    }
    currentLocale = locale; // updating current locale

    // asking angular-translate to load and apply proper translations
    $translate.use(locale);
  };

  // EVENTS
  // on successful applying translations by angular-translate
  var deregistrationCallback = $rootScope.$on('$translateChangeSuccess', function(event, data) {
    $document[0].documentElement.setAttribute('lang', data.language); // sets "lang" attribute to html

    // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
    tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
  });

  $rootScope.$on('$destroy', deregistrationCallback);

  return {
    getLocaleDisplayName: function() {
      return localesObj[currentLocale];
    },
    setLocaleByDisplayName: function(localeDisplayName) {
      setLocale(
        _LOCALES[
          _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName) // get locale index
        ]
      );
    },
    getLocalesDisplayNames: function() {
      return _LOCALES_DISPLAY_NAMES;
    }
  };
}
