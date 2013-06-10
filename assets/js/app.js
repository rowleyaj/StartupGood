;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        // At load, if user hasn't scrolled more than 20px or so...
  			if( $(window).scrollTop() < 20 ) {
          window.scrollTo(0, 1);
        }
      }, 0);
    });
  }

  $(".tweet").tweet({
    join_text: "auto",
    username: "@startupgood",
    avatar_size: 48,
    count: 3,
    auto_join_text_default: " we said, ",
    auto_join_text_ed: " we ",
    auto_join_text_ing: " we were ",
    auto_join_text_reply: " we replied ",
    auto_join_text_url: " we were checking out ",
    loading_text: "loading tweets..."
  });

      // Initiate Countdown
    $(document).ready(function() {
      $('#countdown_dashboard').countDown({
        targetDate: {
          'day':    22,
          'month':  2,
          'year':   2013,
          'hour':   18,
          'min':    0,
          'sec':    0
        },
        omitWeeks: true
      });
    });

    // Set by specific date/time
    function set_by_date() {
      $('#countdown_dashboard').stopCountDown();
      $('#countdown_dashboard').setCountDown({
        targetDate: {
          'day':    22,
          'month':  2,
          'year':   2013,
          'hour':   18,
          'min':    0,
          'sec':    0
        },
        omitWeeks: true
    });
    $('#countdown_dashboard').startCountDown();
}


})(jQuery, this);
