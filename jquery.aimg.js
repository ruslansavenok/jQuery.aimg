/**
 *  jQuery.aimg.js
 *
 *  Makes Image Animations From Horisontal Set Of Frames (sprite)
 *
 *  2012, Ruslan Savenok
 */



(function ($) {

  var dataKey = 'aimg';


  function stop(el) {
    var settings = $.data(el, dataKey);

    clearInterval(settings.interval);
    settings.interval = null;
  }


  function reset(el) {
    var settings = $.data(el, dataKey);

    stop(el);

    $(el).css('backgroundPosition', '0px 0px');
    settings.currFrame = 0;
  }


  $.fn.aimg = function(param) {

    return this.each(function () {
      if (param == 'stop') return stop(this);
      if (param == 'reset') return reset(this);

      var $el = $(this);
      var settings = $.data(this, dataKey);

      if (!settings) {
        settings = $.data(this, dataKey, {
          frameSize: $el.innerWidth(),
          currFrame: 0,
          delay: 100,
          frames: 1
        });
      }

      $.extend(settings, param);


      function runAnimation() {
        if (settings.currFrame == settings.frames) {
          settings.currFrame = 0;
        }

        var framePosition = -(settings.currFrame++ * settings.frameSize);

        $el.css('backgroundPosition', framePosition + 'px 0px');
      }


      if (!settings.interval) {
        runAnimation();
        settings.interval = setInterval(runAnimation, settings.delay);
      }
    });
  };
})(jQuery);
