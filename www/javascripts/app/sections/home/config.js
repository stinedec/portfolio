/**
 * @module App
 * @submodule App.Home
 * @class App.Home.Config
 * @static
 */

var App = App || {};

(function () {

	'use strict';

	var has, sectionInit;

	// Polyfill has(); requirejs will use has() for minconcat switch on build.
	has = function () {
		return false;
	};

	require.config({

		// Maximum load time for scripts.
		'waitSeconds': 45,

		'baseUrl': '/javascripts',

		'paths': {

			// Main Modules
			'global': 'app/global/config',
			'home': 'app/sections/home/index',

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
		window.globalPath = 'generated/app.global.min';
		App.useMinAssets = true;
	} else {
		window.globalPath = 'app/global/config';
		App.useMinAssets = false;
	}

	sectionInit = function (AppGlobal) {

		AppGlobal.utilities.init();
		AppGlobal.init();

		require(['home'], function (Home) {
			Home.init();
		});
	};

	require([window.globalPath], function (AppGlobal) {

		// Run unit tests if in qUnit environment.
		if (window.isQunit) {
			window.isDebugMode = false;
			window.runQunit();
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

}());