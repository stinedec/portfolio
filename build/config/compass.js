/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Compass
 * @static
 */

module.exports = function(config) {

	return {

		'app': {
			'options': {
				'sassDir': config.stylesheets + '/scss',
				'cssDir': config.stylesheets + '/generated',
				'imagesDir': config.images,
				'outputStyle': 'expanded',
				'force': true,
				'noLineComments': true,
				'relativeAssets': true
			}
		},

		'watch': {
			'options': {
				'sassDir': config.stylesheets + '/scss',
				'cssDir': config.stylesheets + '/generated',
				'imagesDir': config.images,
				'outputStyle': 'expanded',
				'force': false,
				'noLineComments': true,
				'relativeAssets': true
			}
		},

		'debug': {
			'options': {
				'sassDir': config.stylesheets + '/scss',
				'cssDir': config.stylesheets + '/generated',
				'imagesDir': config.images,
				'outputStyle': 'expanded',
				'noLineComments': true,
				'relativeAssets': true,
				'debugInfo': true
			}
		}
	};

}