define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var specComponent = require('text!src/spec.dust');
    var specTest = require('text!src/spec-test.dust');
    var specCase = require('text!src/spec-case.dust');

    dust.loadSource(dust.compileComponent(specComponent, 'spec'));
    dust.loadSource(dust.compileComponent(specTest, 'spec__test'));
    dust.loadSource(dust.compileComponent(specCase, 'spec__case'));
});
