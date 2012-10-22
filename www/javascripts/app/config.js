var App = App || {};

// Polyfill has(); requirejs will use has() for minconcat switch on build.
var has = function() {
	return false;
}

require.config({

	// Maximum load time for scripts.
	'waitSeconds': 45,

	'baseUrl': '/javascripts',

	'paths': {

		// Core Libraries
		'jquery': 'lib/jquery-1.7.2.min',
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone-min',

		// Backbone Submodules
		'global-configs': 'app/config/index',
		'global-routers': 'app/router/index',
		'global-models': 'app/model/index',
		'global-collections': 'app/collection/index',
		'global-views': 'app/view/index',
		'global-templates': 'app/template/index',

		// Singleton Method Collections
		'app-utilities': 'app/app.utilities',
		'app-analytics': 'app/app.analytics',
		'app-global': 'app/index'

	},

	// Sets the configuration for your third party scripts that are not AMD compatible
	'shim': {

		'underscore': {
			'exports': '_'
		},

		'backbone': {
			'deps': ['underscore', 'jquery'],
			'exports': 'Backbone'
		}

	}

});

// Switch for minconcat behaviors.
if ( has('useMinAssets') ) {
	window.isDebugMode = false;
} else {
	window.isDebugMode = true;
}

require(['app-global'], function(AppGlobal) {

	// If in unit tests, do not init.
	if ( top !== self ) {
		window.isDebugMode = false;
		return;
	}

	AppGlobal.utilities.init();
	AppGlobal.init();

});