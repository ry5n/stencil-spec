define([
    '$',
    'plugin'
],
function(
    $,
    Plugin
) {

    function Test(element, options) {
        Test.__super__.call(this, element, options, Test.DEFAULTS);
    }

    Test.DEFAULTS = {
        isDisabled = false,
    };

    Plugin.create('test', Test, {
        _init: function(element) {
            this.$element = $(element);
            this.isDisabled = this.options.isDisabled;
        },
        enable: function() {
            this.$element.removeAttr('disabled');
            this.isDisabled = false;
        },
        disable: function() {
            this.$element.attr('disabled', 'disabled');
            this.isDisabled = true;
        },
        isDisabled: function() {
            return this.isDisabled;
        },
    });

});
