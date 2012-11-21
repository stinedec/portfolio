/**
 * @module App
 * @submodule App.Global
 * @class App.Global.Config
 * @static
 */

var App = App || {};

(function () {

	'use strict';

	require.config({

		'baseUrl': '/javascripts',

		'paths': {

			// Core Libraries
			'jquery': 'lib/jquery-1.8.2.min',
			'underscore': 'lib/underscore-min',
			'backbone': 'lib/backbone-min',

			// Backbone Submodules
			'global-configs': 'app/global/config/index',
			'global-routers': 'app/global/router/index',
			'global-models': 'app/global/model/index',
			'global-collections': 'app/global/collection/index',
			'global-views': 'app/global/view/index',
			'global-templates': 'app/global/template/index',

			// Singleton Method Collections
			'app-utilities': 'app/global/app.utilities',
			'app-analytics': 'app/global/app.analytics',
			'app-index': 'app/global/index'

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

	if (!App.useMinAssets) {
		window.isDebugMode = true;
	} else {
		window.isDebugMode = false;
	}

	define(['app-index'], function (AppIndex) {

		return AppIndex;

	});

}());
