export function PageHeaderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/organisms/pageHeader/pageHeader.html',
    scope: {
      video: '=',
      title: '=',
      link: '=',
      image: '=',
      background: '='
    },
    controller: PageHeaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class PageHeaderController {
  constructor($document, $scope) {
    'ngInject';

    this.getSourceSrc = function(ext) {
      return 'assets/videos/' + this.video + '.' + ext;
    };

    this.$scope = $scope;

    if (this.video) {
      // Add a 'js' class to the html tag
      // If you're using modernizr or similar, you
      // won't need to do this
      $document[0].documentElement.className += " js";

      // Fade in videos
      var fade_in_videos = $document[0].querySelectorAll('.video-bg video');
      for (var i = 0; i < fade_in_videos.length; i++) {
        if (fade_in_videos[i].currentTime > 0) {
          // It's already started playing
          fade_in_videos[i].className += ' is-playing';
        } else {
          // It hasn't started yet, wait for the playing event
          fade_in_videos[i].addEventListener("playing", function() {
            if (this.className.indexOf('is-playing') < 0) {
              this.className += ' is-playing';
            }
          });
        }
      }

      // Scrap videos on iOS because it won't autoplay,
      // it adds it's own play icon and opens the
      // media player when clicked
      var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
      if (iOS) {
        var background_videos = $document[0].querySelectorAll('.video-bg video');
        for (i = 0; i < background_videos.length; i++) {
          background_videos[i].parentNode.removeChild(background_videos[i]);
        }
      }
    }
  }
}

PageHeaderController.$inject = ["$document", "$scope"];
