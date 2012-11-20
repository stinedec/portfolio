/**
 * @module Build
 * @submodule Build.Tasks
 * @class Build.Tasks.CSSMin
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'src': [
				config.stylesheets + '/reset.css',
				config.stylesheets + '/app/app.css',
				config.stylesheets + '/app/print.css'
			],
			'dest': config.cssbin + '/app.min.css'
		}

	};

}