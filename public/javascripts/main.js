$.fn.extend({
  animateCSS: function (name) {
    this.addClass('animated ' + name).one('animationend', function () {
      $(this).removeClass('animated ' + name);
    });
  }
});
