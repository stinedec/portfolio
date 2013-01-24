/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.CSSMin
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'src': [
				config.cssbin + '/style.css'
			],
			'dest': config.cssbin + '/style.min.css'
		}

	};

}