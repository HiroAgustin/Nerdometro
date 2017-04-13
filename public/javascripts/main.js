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

  shuffle: function shuffleAnswers () {
    $('.page--question').shuffle().each(function () {
      $(this).find('.answer').shuffle();
    });

    $('.progress__step').removeClass('progress__step--active');

    return this;
  },

  setDom: function setDom () {
    _.extend(this, {
      $body: $('body'),

      $pages: $('.page'),
      $questions: $('.page--question'),
      $answers: $('.answer'),

      $spinner1: $('#js-spinner-1'),
      $spinner2: $('#js-spinner-2'),

      $progress: $('#js-progress'),
    });

    $.ripple('.button', { duration: .4 });

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
        setTimeout(self.showAuth.bind(self), 400);
      });

    $('#js-skip')
      .off('click.skip')
      .on('click.skip', function (event) {
        event.preventDefault();
        self.initQuiz();
      });

    PubSub.subscribe('user:register', function (label, user) {
      setTimeout(self.initQuiz.bind(self), 400);
    });

    return this;
  },

  tickSpinner: function tickSpinner (config) {
    this.$spinner1
      .find('.spinner__label')
      .html(config.total - config.current)
      .end()
      .find('.spinner__image')
      .shuffle()
      .addClass('hide')
      .eq(config.current)
      .removeClass('hide')
      .animateCSS('bounceIn');

    config.current++;

    return this;
  },

  endSpinner: function endSpinner (timer) {
    clearInterval(timer);
    this.showQuestion(0);
    return this;
  },

  initQuiz: function initQuiz () {
    var config = { total: 3, current: 0, }
        timer = setInterval(function () {
          if (config.current < config.total)
            this.tickSpinner(config);
          else
            this.endSpinner(timer);
        }.bind(this), 1000);

    this
      .showPage(2)
      .tickSpinner(config)
      .nextProgress();

    return this;
  },

  flipSpinner: function flipSpinner (config) {
    this.$spinner2
      .find('.spinner__image')
      .addClass('hide')
      .eq(config.current)
      .removeClass('hide');

    config.current++;

    return this;
  },

  showResult: function showResult (timer) {
    clearInterval(timer);
    this.nextPage();
    return this;
  },

  endQuiz: function endQuiz () {
    var config = { total: 10, current: 0, }
        timer = setInterval(function () {
          if (config.current < config.total)
            this.flipSpinner(config);
          else
            this.showResult(timer);
        }.bind(this), 250);

    this.$answers
      .filter('.answer--isSelected')
      .find('img')
      .clone()
      .wrap(
        $('<div/>').addClass('spinner__image spinner__image--selected')
      )
      .parent()
      .appendTo(this.$spinner2);


    this
      .nextPage()
      .flipSpinner(config);

    return this;
  },

  getState: function getState () {
    return {
      step: this.step,
      results: this.results
    };
  },

  nextProgress: function nextProgress () {
    var $questions = this.$pages.filter('.page--question'),
        index = this.step - $questions.first().index() + 1;

    this.$progress
      .attr('data-length', (index + 1) / $questions.length * 100)
      .find('.progress__step')
      .eq(index)
      .addClass('progress__step--active');

    return this;
  },

  selectAnswer: function selectAnswer (event) {
    var $answer = $(event.target).closest('.answer');

    if ($answer.parent().has('.answer.animated').length)
      return this;

    this
      .setAnswer($answer.data('value'))
      .nextProgress();

    $answer
      .addClass('answer--isSelected')
      .addClass('animated tada')
      .one('animationend', this.nextQuestion.bind(this))
      .siblings()
      .removeClass('answer--isSelected')
      .addClass('animated bounceOut');

    return this;
  },

  setAnswer: function setAnswer (value) {
    this.results[this.step] = parseInt(value, 10);
    return this;
  },

  showPage: function showPage (index) {
    var $page = this.$pages.hide().eq(index).show();
    this.step = index;

    this.$body
      .removeClass(function (index, name) {
        return (name.match(/(^|\s)page--\S+/g) || []).join(' ');
      })
      .addClass('page--' + $page.data('label'));

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
    var $question = this.$pages.filter('.page--question').eq(index),
        $answers = $question.find('.answer');

    this.showPage($question.index());

    $answers
      .css('animation-delay', function () {
        return $(this).index() * .25 + 's';
      })
      .animateCSS('flipInY')
      .last()
      .one('animationend', function () {
        $answers.css('animation-delay', '0s');
      });

    return this;
  },

  nextQuestion: function nextQuestion () {
    var step = this.step,
        $questions = this.$pages.filter('.page--question');

    if (step < $questions.last().index())
      this.showQuestion(step - $questions.first().index() + 1);
    else
      this.endQuiz();

    return this;
  }
};

Main.init();
