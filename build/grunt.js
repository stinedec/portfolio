var _ = require('underscore');

module.exports = function(grunt) {

	var config = {};

	config.root = '../www';
	config.images = config.root + '/images';
	config.stylesheets = config.root + '/stylesheets';
	config.javascripts = config.root + '/javascripts';
	config.jsbin = config.javascripts + '/generated';
	config.cssbin = config.stylesheets + '/generated';

	// Project configuration.
	var projectConfig = {

		// JS linting
		lint: {
			src: [
				config.javascripts + '/app/**/*.js'
			]
		},

		// JS beautifier options
		beautifier: {
			options: {
				indentSize: 1,
				indentChar: '\t',
				spaceAfterAnonFunction: false
			}
		},

		// JS beautifier
		beautify: {
			files: '<config:lint.src>'
		},

		// Run QUnit test via PhantomJS
		qunit: {
			local: ['http://local.boilerplate/javascripts/test/test.html']
		},

		// Generate YUIDocs
		yuidoc: {
			compile: {
				options: {
					paths: config.javascripts + '/app/',
					outdir: 'docs',
					project: {
						logo: '../templates/logo.png'
					}
				}
			}
		}

	};

	_.extend(projectConfig, require('./tasks/requirejs.js')(config));
	_.extend(projectConfig, require('./tasks/csstasks.js')(config));

	grunt.initConfig(projectConfig);

	// Default task.
	grunt.registerTask('default', 'cssmin requirejs');
	grunt.registerTask('docs', 'yuidoc');

	// load grunt plugins
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-beautify');

};
