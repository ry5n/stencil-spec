require.config({
    bundles: {
        'dust-full': ['dust.core', 'dust.compile'],
    },
    paths: {
        'text': '../../bower_components/text/text',
        'dust-full': '../../bower_components/dustjs-linkedin/dist/dust-full',
        'component-dustjs-utils': '../../bower_components/component-dustjs-utils',
    },
});

// Enable AMD loading.
define.amd.dust = true;

define(function(require) {
    // Deps
    require('text');
    require('dust-full');
    var dust = require('component-dustjs-utils/index');

    // Component assets
    var cRoot = require('text!../../src/spec.dust');
    var cTest = require('text!../../src/spec__test.dust');
    var cCase = require('text!../../src/spec__case.dust');
    var cStyle = require('text!../../tmp/spec.css');

    // Test Spec
    var specView = require('text!spec.dust');

    // Context
    var context = {
        componentStyle: cStyle,
    };

    // Compile
    dust.loadSource(dust.compileComponent(cRoot, 'spec'));
    dust.loadSource(dust.compileComponent(cTest, 'spec__test'));
    dust.loadSource(dust.compileComponent(cCase, 'spec__case'));
    dust.loadSource(dust.compile(specView, 'spec-view'));

    // Render
    dust.render('spec-view', context, function(err, out) {
        if (!err) {
            var target = document.querySelector('body');

            target.innerHTML = out;
        } else {
            console.log(err);
        }
    });
});
