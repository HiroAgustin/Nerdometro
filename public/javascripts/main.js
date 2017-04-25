$.fn.extend({
  animateCSS: function (name) {
    return this.addClass('animated ' + name).one('animationend', function () {
      $(this).removeClass('animated ' + name);
    });
  }
});

var Main = {
  init: function init () {

    this.results = {};
    this.step = 0;

    this
      .shuffle()
      .setDom()
      .listen()
      .showHome();

    return this;
  },

  restart: function restart () {
    location.reload(true);
  },

  shuffle: function shuffleAnswers () {
    $('.page--question').shuffle();
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
        clearInterval(self.homeInterval);
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

    $(document).contextmenu(function (e) {
      e.preventDefault();
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
    var results = this.results,
        lvl = _.reduce(results, function (memo, num) {
          return memo + num;
        }, 0) / _.size(results)
        name = lvl < 40 ? '30' : lvl < '60' ? '50' : lvl < '80' ? '70' : '90';

    clearInterval(timer);

    $('.result__header')
      .hide()
      .filter('.result__header--' + name)
      .show();

    $('.nerdBar__label')
      .text(Math.round(lvl) + '%');

    setTimeout(function () {
      $('.nerdBar__content')
        .height(lvl + '%');
    }, 400);

    this.nextPage();

    setTimeout(this.showAd.bind(this), 8400);

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
    //   .attr('data-length', (index + 1) / $questions.length * 100)
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
      .addClass('animated bounceOut')
      .closest('.page--question')
      .find('.question__predicate')
      .removeClass('animated fadeInDown')
      .animateCSS('fadeOutUp');

    return this;
  },

  setAnswer: function setAnswer (value) {
    var $questions = this.$pages.filter('.page--question'),
        index = this.step - $questions.first().index() + 1;

    this.results[index] = parseInt(value, 10);

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

  toggleHomeLoading: function toggleHomeLoading () {
    var $page = $('.page--home'),
        $intro = $page.find('.home__show__intro'),
        $after = $page.find('.home__show__after');

    $after.hide();
    $intro.show().find('img').animateCSS('fadeInDown');

    setTimeout(function () {
      $intro.find('img').animateCSS('fadeOutUp').one('animationend', function () {
        $intro.hide();

        $after.show().children().css('animation-delay', function () {
          return $(this).index() * .5 + 's';
        }).animateCSS('fadeInDown');
      });
    }, 5000);
  },

  showHome: function showHome () {
    this.showPage(0);

    this.toggleHomeLoading();
    this.homeInterval = setInterval(this.toggleHomeLoading.bind(this), 15000);

    return this;
  },

  showAd: function showAd () {
    var $page = $('.page--ad'),
        $intro = $page.find('.ad__show__intro'),
        $after = $page.find('.ad__show__after');

    $after.hide();
    $intro.show().find('img').animateCSS('fadeInDown');

    setTimeout(function () {
      $intro.find('img').animateCSS('fadeOutUp').one('animationend', function () {
        $intro.hide();

        $after.show().children().css('animation-delay', function () {
          return $(this).index() * .5 + 's';
        }).animateCSS('fadeInDown');
      });

      setTimeout(function () {
        this.restart();
      }.bind(this), 6000);
    }.bind(this), 4000);

    this.nextPage();
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
