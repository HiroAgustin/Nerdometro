$.fn.extend({
  animateCSS: function (name) {
    return this.addClass('animated ' + name).one('animationend', function () {
      $(this).removeClass('animated ' + name);
    });
  }
});

var Main = {
  results: [],
  step: 0,

  init: function init () {

    this
      .shuffle()
      .setDom()
      .listen()
      .showHome();

    return this;
  },

  reset: function reset () {
    this.results = [];
    this.showHome();

    return this;
  },

  shuffle: function shuffleAnswers () {
    $('.question').shuffle().each(function () {
      $(this).find('.answer').shuffle();
    });

    return this;
  },

  setDom: function setDom () {
    _.extend(this, {
      $pages: $('.page'),
      $questions: $('.question'),
      $answers: $('.answer'),

      $preComputing: $('#js-pre-computing'),
      $postComputing: $('#js-post-computing')
    });

    return this;
  },

  listen: function listen () {
    var self = this;

    this.$answers
      .off('click.answer')
      .on('click.answer', this.selectAnswer.bind(this));

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

    PubSub.subscribe('user:register', function (label, user) {
      self.initQuiz();
    });

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

    this.showPage(this.$preComputing.index());

    setTimeout(function () {
      this.showQuestion(0);
    }.bind(this), duration)

    progress.update(total);

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

  selectAnswer: function selectAnswer (event) {
    var self = this,
        $answer = $(event.target).closest('.answer');

    this.setAnswer($answer.data('value'));

    $answer
      .addClass('answer--isSelected')
      .animateCSS('tada')
      .siblings()
      .removeClass('answer--isSelected')
      .animateCSS('bounceOut')
      .last()
      .one('animationend', this.nextQuestion.bind(this));

    return this;
  },

  setAnswer: function setAnswer (value) {
    this.results[this.step] = parseInt(value, 10);
    return this;
  },

  showPage: function showPage (index) {
    this.step = index;
    this.$pages.hide().eq(index).show();
    return this;
  },

  nextPage: function nextPage () {
    this.showPage(this.step + 1);
    return this;
  },

  showHome: function showHome () {
    this.showPage(0);
    return this;
  },

  showAuth: function showAuth () {
    this.showPage(1);
    return this;
  },

  showQuestion: function showQuestion (index) {
    var $question = this.$pages.filter('.question').eq(index);

    if (!$question)
      return this;

    this.showPage($question.index());

    $question.find('.answer').animateCSS('flipInY');

    return this;
  },

  nextQuestion: function nextQuestion () {
    var step = this.step,
        $questions = this.$pages.filter('.question');

    if (step < $questions.length)
      this.showQuestion(step - $questions.first().index() + 1);
    else
      this.nextPage();

    return this;
  },

  showResult: function showResult () {
    this.showPage(this.$pages.length);
    return this;
  }
};

Main.init();
