module.exports = function(grunt) {

	var config = {};

	config.root = 'www';
	config.stylesheets = config.root + '/stylesheets';
	config.javascripts = config.root + '/javascripts';
	config.jsbin = config.javascripts + '/generated';
	config.cssbin = config.stylesheets + '/generated';

	// Project configuration.
	grunt.initConfig({

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

		// CSS minconcat
		cssmin: {
			app: {
				src: [
					config.stylesheets + '/reset.css',
					config.stylesheets + '/app/app.css',
					config.stylesheets + '/app/print.css'
				],
				dest: config.cssbin + '/app.min.css'
			}
		},

		// Run QUnit test via PhantomJS
		qunit: {
			local: ['http://local.boilerplate:8888/javascripts/test/index.html'],
			dev: ['http://dev.foo.com/javascripts/test/index.html'],
			stage: ['http://stage.foo.com/javascripts/test/index.html']
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
		},

		requirejs: require('./build/tasks/requirejs.js')(config),

		jslint: {
			files: ['www/javascripts/app/**/*.js'],
			exclude: ['**/ignore-*.js'],
			directives: {
				browser: true,
				nomen: true, // Tolerate dangling _ (underscore).
				plusplus: true, // Tolerate ++/--.
				unparam: true,
				todo: true,
				predef: ['jQuery', 'require', 'define', 'log', 'App', 'FB', '_gaq'] // array of pre-defined globals
			},
			options: {
				junit: 'docs/jslint/junit.xml',
				log: 'docs/jslint/lint.log',
				jslintXml: 'docs/jslint/jslint_xml.xml',
				errorsOnly: true
			}
		}
	});

	// Default task.
	grunt.registerTask('default', 'cssmin requirejs');
	grunt.registerTask('docs', 'yuidoc');

	// load grunt plugins
	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-crusher');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-jslint');

};
