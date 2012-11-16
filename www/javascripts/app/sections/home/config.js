var App = App || {};

// Polyfill has(); requirejs will use has() for minconcat switch on build.
var has = function() {
	return false;
}

require.config({

	'baseUrl': '/javascripts',

	'paths': {

		// Main Modules
		'global': 'app/global/config',

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
	window.loadPath = 'generated/app.global.min';
} else {
	window.loadPath = 'app/global/config';
}

var sectionInit = function(AppGlobal) {
	AppGlobal.utilities.init();
	AppGlobal.init();
}

require([window.loadPath], function(AppGlobal) {

	// If in unit tests, do not init.
	if ( top !== self ) {
		window.isDebugMode = false;
		return;
	}

	// If in minconcat, AppGlobal refers to the concatenated file, and will therefore be undefined.
	// In this case, you will then need to require the 'global' path, which was loaded as a part of the minified file.

	if (AppGlobal) {
		sectionInit(AppGlobal);
	} else {
		require(['global'], sectionInit);
	}

});
