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
    this.$keyboards.click(this.onType.bind(this));

    return this;
  },

  onSubmit: function onSubmit (event) {
    event.preventDefault();
    PubSub.publish('user:register', this.serializeForm());
    return this;
  },

  serializeForm: function serializeForm () {
    return _.chain(this.$form.serializeArray())
      .map(_.values)
      .object()
      .value();
  },

  onType: function onType (event) {
    var $target = $(event.target),
        $container = $target.closest('.input-field'),
        $input = $container.find('input'),
        key = $target.data('key');

    event.stopPropagation();

    switch (key) {
      case 8:
        $input.val($input.val().slice(0, -1)).focus();
        break;
      case 13:
        this.hideKeyboards();
        $container.next().find('input').focus();
        break;
      default:
        $input.val($input.val() + String.fromCharCode(key)).focus();
    }

    return this;
  },

  showKeyboard: function showKeyboard (event) {
    this.hideKeyboards();

    $(event.target)
      .closest('.input-field')
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
