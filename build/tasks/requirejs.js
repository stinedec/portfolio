/**
 * @module Build
 * @submodule Build.Tasks
 * @class Build.Tasks.RequireJS
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
					'backbone': 'empty:'
				},
				'has': {
					'debugMode': false
				},
				'out': config.jsbin + '/main.min.js'
			}
		}
	};

};