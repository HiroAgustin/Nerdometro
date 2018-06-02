var Auth = {

  $form: $('#js-auth'),
  $name: $('#js-nombre'),
  $tel: $('#js-tel'),

  $keyboards: $('.keyboard'),

  init: function init () {
    this.listen();
    return this;
  },

  listen: function listen () {

    this.$name.focus(this.showKeyboard.bind(this));
    this.$tel.focus(this.showKeyboard.bind(this));

    this.$form.submit(this.onSubmit.bind(this));
    this.$keyboards.on('touchstart mousedown', this.onType.bind(this));

    $.ripple('.key', { duration: .4 });

    return this;
  },

  onSubmit: function onSubmit (event) {
    event.preventDefault();

    if (!this.isSubmitted) {
      PubSub.publish('user:register', this.serializeForm());
      this.isSubmitted = true;
    }

    return this;
  },

  serializeForm: function serializeForm () {
    return _.chain(this.$form.serializeArray())
      .map(_.values)
      .object()
      .value();
  },

  onType: function onType (event) {
    var $target = $(event.target).closest('.key'),
        $container = $target.closest('.authForm__input'),
        $input = $container.find('input'),
        key = $target.data('key');

    event.stopPropagation();

    switch (key) {
      case 8:
        $input.val($input.val().slice(0, -1)).focus();
        break;
      case 13:
        this.hideKeyboards();
        break;
      default:
        $input.val($input.val() + String.fromCharCode(key)).focus();
    }

    return this;
  },

  showKeyboard: function showKeyboard (event) {
    this.hideKeyboards();

    $(event.target)
      .closest('.authForm__input')
      .find('.keyboard')
      .removeClass('hide');

    return this;
  },

  hideKeyboards: function hideKeyboards () {
    this.$keyboards.addClass('hide');
    return this;
  }
};

Auth.init();
