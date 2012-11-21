/**
 * @module Build
 * @class Build.Config
 * @static
 */

module.exports = function(grunt) {

	var config = {};

	config.root = 'www';
	config.stylesheets = config.root + '/stylesheets';
	config.javascripts = config.root + '/javascripts';
	config.jsbin = config.javascripts + '/generated';
	config.cssbin = config.stylesheets + '/generated';
	config.docsbin = 'docs';

	// Project configuration.
	grunt.initConfig({

		'beautifier': {
			'options': {
				'indentSize': 1,
				'indentChar': '\t',
				'spaceAfterAnonFunction': true
			}
		},

		'beautify': {
			'files': [ config.javascripts + '/app/**/*.js' ]
		},

		'cssmin': require('./build/tasks/cssmin.js')(config),

		'qunit': require('./build/tasks/qunit.js')(config),

		'yuidoc': require('./build/tasks/yuidoc.js')(config),

		'requirejs': require('./build/tasks/requirejs.js')(config),

		'jslint': require('./build/tasks/jslint.js')(config)

	});

	// Default task.
	grunt.registerTask('default', 'cssmin jslint requirejs');
	grunt.registerTask('docs', 'yuidoc');

	// load grunt plugins
	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-crusher');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-jslint');

};
