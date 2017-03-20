$.fn.extend({
  animateCSS: function (name) {
    this.addClass('animated ' + name).one('animationend', function () {
      $(this).removeClass('animated ' + name);
    });
  }
});

var Main = {

  $questions: $('.question'),
  $answers: $('.answer'),
  results: [],
  step: 0,

  init: function init () {

    this
      .listen()
      .setStep(0);

    return this;
  },

  reset: function reset () {
    this.results = [];
    this.setStep(0);

    return this;
  },

  listen: function listen () {
    var self = this;

    this.$answers
      .off('click.answer')
      .on('click.answer', function (event) {
        self.setAnswer($(this).data('value'));
      });

    window.onpopstate = this.onPopState.bind(this);

    return this;
  },

  getState: function getState () {
    return {
      step: this.step,
      results: this.results
    };
  },

  getTitle: function getTitle () {
    return 'Nerd Quiz - Step ' + this.step;
  },

  getUrlPath: function getUrlPath () {
    return location.origin + '/step/' + this.step;
  },

  onPopState: function onPopState (event) {
    var state = event.state;

    if (state)
      this.setStep(state.step, true);
  },

  setStep: function setStep (updated, silent) {
    var step = this.step = parseInt(updated, 10),
        state = this.getState(),
        title = this.getTitle(),
        url = this.getUrlPath();

    if (_.isEmpty(history.state) || silent)
      history.replaceState(state, title, url);
    else if (!_.isEqual(history.state, state))
      history.pushState(state, title, url);

    this.showQuestion(step);

    return this;
  },

  setAnswer: function setAnswer (value) {
    var current = this.step;

    this.results[current] = parseInt(value, 10);
    this.setStep(current + 1);

    return this;
  },

  showHome: function showHome () {

  },

  showQuestion: function showQuestion (index) {
    this.$questions.hide().eq(index).show();
    return this;
  },

  showResult: function showResult () {

  },
};

Main.init();
