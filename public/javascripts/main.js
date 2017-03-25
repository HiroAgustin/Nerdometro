$.fn.extend({
  animateCSS: function (name) {
    this.addClass('animated ' + name).one('animationend', function () {
      $(this).removeClass('animated ' + name);
    });
  }
});

var Main = {

  auth: Auth,

  $pages: $('.page'),
  $questions: $('.question'),
  $answers: $('.answer'),

  $preComputing: $('#js-pre-computing'),
  $postComputing: $('#js-post-computing'),

  results: [],
  step: 0,

  init: function init () {

    this
      .listen()
      .initProgressBar()
      .showHome();

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
        self.showAuth();
      });

    $('#js-skip')
      .off('click.skip')
      .on('click.skip', function (event) {
        event.preventDefault();
        self.initQuiz();
      });

    window.onpopstate = this.onPopState.bind(this);

    return this;
  },

  initQuiz: function initQuiz () {
    var total = 3,
        duration = 1800,
        progress = this.createProgressCircle({
          id: 'js-pre-computing-progress',
          duration: duration,
          text: function (value){
            return Math.ceil(total - value);
          },
          maxValue: total,
          radius: 200,
          width: 30
        });

    this.setStep(this.$preComputing.index());

    setTimeout(function () {
      this.showQuestion(0);
    }.bind(this), duration)

    progress.update(total);

    return this;
  },

  initProgressBar: function initProgressBar () {
    var total = this.$questions.length;

    this.progressBar = this.createProgressCircle({
      id: 'js-progress',
      maxValue: total,
      text: function (value){
        return Math.ceil(value) + '/' + total;
      }
    });

    return this;
  },

  createProgressCircle: function createProgressCircle (config) {
    return Circles.create(_.defaults(config, {
      radius: 60,
      value: 0,
      maxValue: 100,
      width: 20,
      text: function (value){
        return value + '%';
      },
      colors: ['#D3B6C6', '#4B253A'],
      duration: 400,
      wrpClass: 'circles-wrp',
      textClass: 'circles-text',
      valueStrokeClass: 'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper: true,
      styleText: true
    }));
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

  showAuth: function showAuth () {
    this.setStep(1);
    return this;
  },

  showQuestion: function showQuestion (index) {
    if (index < this.$questions.length)
      this.setStep(this.$pages.filter('.question').eq(index).index());

    return this;
  },

  showResult: function showResult () {
    this.setStep(this.$questions.length);
    return this;
  }
};

Main.init();
