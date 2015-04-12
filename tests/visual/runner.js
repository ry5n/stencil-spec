define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var spec = require('text!spec.dust');

    // Require the component’s template loader (`*.component.js`) here.
    require('../../spec.component');

    // Define any context required for the tests.
    var context = {};

    // Render
    dust.renderSource(spec, context, function(err, out) {
        if (!err) {
            var target = document.querySelector('body');

            target.innerHTML = out;
        } else {
            console.log(err);
        }
    });
});
