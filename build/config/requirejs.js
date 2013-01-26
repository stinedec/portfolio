/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.RequireJS
 * @static
 */

module.exports = function(config) {

	return {

		'global': {
			'options': {
				'name': 'app/main',
				'baseUrl': config.javascripts,
				'mainConfigFile': config.javascripts + '/app/config.js',
				// Exclusions from minconcat use empty:
				'paths': {
					'jquery': 'empty:',
					'underscore': 'empty:',
					'backbone': 'empty:',
					'settings': 'empty:'
				},
				'has': {
					'debugMode': true
				},
				'out': config.jsbin + '/app.min.js'
			}
		}
	};

};