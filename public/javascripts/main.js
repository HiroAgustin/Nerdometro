$.fn.extend({
  animateCSS: function (name) {
    this.addClass('animated ' + name).one('animationend', function () {
      $(this).removeClass('animated ' + name);
    });
  }
});

var Main = {

  $pages: $('.page'),
  $questions: $('.question'),
  $answers: $('.answer'),
  results: [],
  step: 0,

  init: function init () {

    this
      .listen()
      .setStep(this.getStepFromPath() || 0);

    return this;
  },

  reset: function reset () {
    this.results = [];
    this.showHome();

    return this;
  },

  listen: function listen () {
    var self = this;

    this.$answers
      .off('click.answer')
      .on('click.answer', function (event) {
        self
          .setAnswer($(this).data('value'))
          .nextStep()
      });

    $('#js-start')
      .off('click.start')
      .on('click.start', function (event) {
        event.preventDefault();
        self.showQuestion(0);
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

  getStepFromPath: function getStepFromPath () {
    var path = location.pathname || '';
    return _.contains(path, '/') ? parseInt(path.split('/')[2], 10) : null;
  },

  onPopState: function onPopState (event) {
    var state = event.state;

    if (state)
      this.setStep(state.step, true);
    else
      this.showHome();
  },

  setStep: function setStep (updated, silent) {
    var step = this.step = parseInt(updated, 10),
        state = this.getState(),
        title = this.getTitle(),
        url = this.getUrlPath(),
        previous = history.state;

    if (_.isEmpty(previous) || silent)
      history.replaceState(state, title, url);
    else if (previous.step !== state.step)
      history.pushState(state, title, url);

    this.showPage(step);

    return this;
  },

  setAnswer: function setAnswer (value) {
    this.results[this.step] = parseInt(value, 10);
    return this;
  },

  showPage: function showPage (index) {
    this.$pages.hide().eq(index).show();
    return this;
  },

  nextStep: function nextStep () {
    this.setStep(this.step + 1);
    return this;
  },

  showHome: function showHome () {
    this.setStep(0);
    return this;
  },

  showQuestion: function showQuestion (index) {
    if (index < this.$questions.length)
      this.setStep(index + 1);

    return this;
  },

  showResult: function showResult () {
    this.setStep(this.$questions.length);
    return this;
  }
};

Main.init();
