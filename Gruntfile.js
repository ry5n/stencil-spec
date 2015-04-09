module.exports = function(grunt) {
    var path = require('path');
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                style: 'expanded',
                sourcemap: 'none',
                loadPath: [
                    './',
                    './bower_components',
                ]
            },
            compile_tests: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'src/**/*.scss',
                    dest: 'tmp',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'iOS >= 6.0',
                    'Android >= 2.3',
                    'last 4 ChromeAndroid versions'
                ]
            },
            prefix_tests: {
                files: [{
                    expand: true,
                    src: 'tmp/*.css' // Overwrite compiled css.
                }]
            },
        },

        clean: ['tmp', '**/*.css'],

        watch: {
            scss: {
                files: [
                    'src/**/*.scss',
                    'tests/**/*.scss'
                ],
                tasks: ['default']
            }
        },

        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 3000,
                    useAvailablePort: true,
                    base: '.'
                }
            }
        }
    });

    // Default task
    grunt.registerTask('compile', ['sass', 'autoprefixer']);
    grunt.registerTask('serve', ['compile', 'connect:server', 'watch']);
    grunt.registerTask('default', ['serve']);
};
