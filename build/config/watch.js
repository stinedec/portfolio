/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Watch
 * @static
 */

module.exports = function(config) {

	return {

    'all': {
      'files': [
        config.root + '/index.html',
      ],
      'options': {
        livereload: true
      }
    },

		'app': {
			'files': [
				config.stylesheets + '/stylus/**/*.styl'
			],
			'tasks': ['stylus:dev']
		},

		'debug': {
			'files': [
				config.stylesheets + '/scss/**/*.scss',
				config.javascripts + '/app/**/*.js'
			],
			'tasks': ['compass:debug']
		}

	};

}

