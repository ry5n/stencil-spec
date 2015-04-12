/**
 * Loader for the component’s  Dust templates, found in lib/
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var specComponent = require('text!./lib/spec.dust');
    var specTest = require('text!./lib/spec-test.dust');
    var specCase = require('text!./lib/spec-case.dust');

    dust.loadSource(dust.compileComponent(specComponent, 'spec'));
    dust.loadSource(dust.compileComponent(specTest, 'spec__test'));
    dust.loadSource(dust.compileComponent(specCase, 'spec__case'));
});
