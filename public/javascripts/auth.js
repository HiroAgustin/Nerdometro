var Auth = {

  $form: $('#js-auth'),
  $name: $('#js-nombre'),
  $tel: $('#js-tel'),

  $textKeyboard: $('#js-text-keyboard'),
  $numKeyboard: $('#js-num-keyboard'),

  init: function init () {
    this
      .listen();

    return this;
  },

  listen: function listen () {

    this.$name
      .focus(this.showTextKeyboard.bind(this));

    this.$tel
      .focus(this.showTelKeyboard.bind(this));

    this.$form
      .off('submit.register')
      .on('submit.register', function (event) {
        event.preventDefault();
        // Store data
        self.initQuiz();
      });

    return this;
  },

  showTextKeyboard: function showTextKeyboard () {
    this.$numKeyboard
      .addClass('hide');

    this.$textKeyboard
      .removeClass('hide');
  },

  showTelKeyboard: function showTelKeyboard () {
    this.$textKeyboard
      .addClass('hide');

    this.$numKeyboard
      .removeClass('hide');
  }
};

Auth.init();
