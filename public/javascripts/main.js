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
    $('.page__question').shuffle().each(function () {
      $(this).find('.answer').shuffle();
    });

    return this;
  },

  setDom: function setDom () {
    _.extend(this, {
      $pages: $('.page'),
      $questions: $('.page__question'),
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
        duration = 1800;

    this.showPage(this.$preComputing.index());

    setTimeout(function () {
      this.showQuestion(0);
    }.bind(this), duration);

    return this;
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
      .addClass('animated tada')
      .one('animationend', function () {
        self.nextQuestion();
      })
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
    var $question = this.$pages.filter('.page__question').eq(index),
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
        $questions = this.$pages.filter('.page__question');

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
