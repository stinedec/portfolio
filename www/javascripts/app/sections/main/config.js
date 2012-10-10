/**
 * This config is responsible for setting up dependencies for the section and handling the minification switch.
 *
 * @module App
 * @class Main
 * @static
 */

// Polyfill has.js to return false for anything on the FE.
// Used by optimizer to switch in minconcat asset below.
var has = function() {
	return false;
}

require.config({
	baseUrl: "/javascripts"
});

// Switch for minconcat assets.
if ( has('useMinAssets') ) {
	window.isDebugMode = false;
	require.config({
		paths: {
			'config-global': 'generated/app.global.min'
		}
	});
} else {
	window.isDebugMode = true;
	require.config({
		paths: {
			'config-global': 'app/global/config'
		}
	});
}

// Load dependencies. In the minconcat environment Global will be undefined, since config-global would refer
// to the entire optimized global module. (Need to work on this, and the naming convention).
require(['config-global', 'app/sections/main/app.main'], function(Global, Main) {

	if (Global) {

		var globalInit = new Global();
		var main = new Main();
		main.init();

	} else {

		require(['app/global/config'], function(Global) {

			var globalInit = new Global();
			var main = new Main();
			main.init();

		});

	}
});