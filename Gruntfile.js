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
	config.images = config.root + '/images';
	config.docsbin = 'docs';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration.
	grunt.initConfig({

    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['./www/'],
          livereload: true
        }
      }
    },
 
    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    },

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

		'stylus': require('./build/config/stylus.js')(config),

		'qunit': require('./build/config/qunit.js')(config),

		'yuidoc': require('./build/config/yuidoc.js')(config),

		'requirejs': require('./build/config/requirejs.js')(config),

		'jshint': require('./build/config/jshint.js')(config),

		'watch': require('./build/config/watch.js')(config)

	});

	// Default task.
	grunt.registerTask('default', ['stylus:prod', 'requirejs']);
	grunt.registerTask('css', ['stylus:dev']);
	grunt.registerTask('cssmin', ['stylus:prod']);
	grunt.registerTask('docs', 'yuidoc');
	grunt.registerTask('pretty-js', 'beautify');
  grunt.registerTask('server', ['express', 'open', 'watch']);

	// load local tasks.
	grunt.loadTasks('./build/tasks');

	// load grunt plugins
	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-open');


};
