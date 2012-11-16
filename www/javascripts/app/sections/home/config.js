var App = App || {};

// Polyfill has(); requirejs will use has() for minconcat switch on build.
var has = function() {
	return false;
}

require.config({

	'baseUrl': '/javascripts',

	'paths': {

		// Backbone Submodules
		'home-configs': 'app/sections/home/config/index',
		'home-routers': 'app/sections/home/router/index',
		'home-models': 'app/sections/home/model/index',
		'home-collections': 'app/sections/home/collection/index',
		'home-views': 'app/sections/home/view/index',
		'home-templates': 'app/sections/home/template/index'

	}

});

// Switch for minconcat assets.
if (has('useMinAssets')) {
	require.config({
		paths: {
			'global': 'generated/app.global.min'
		}
	});
} else {
	require.config({
		paths: {
			'global': 'app/global/config'
		}
	});
}

// Load dependencies. In the minconcat environment AppGlobal will be undefined, since config-global would refer
// to the entire optimized global module. (Need to work on this, and the naming convention).
require(['global'], function(AppGlobal) {

	// If in unit tests, do not init.
	if ( top !== self ) {
		window.isDebugMode = false;
		return;
	}

	if (AppGlobal) {

		AppGlobal.utilities.init();
		AppGlobal.init();

	} else {

		require(['app/global/config'], function(AppGlobal) {

			AppGlobal.utilities.init();
			AppGlobal.init();

		});
	}

});
