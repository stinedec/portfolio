/**
 * @module Main
 */
(function() {
	'use strict';

	require.config({

		'baseUrl': 'javascripts',

		'paths': {

			// Core Libraries
			'jquery': 'lib/jquery-1.8.2.min',
			'underscore': 'lib/underscore-min',
			'backbone': 'lib/backbone-min',

			// Backbone Submodules
			'configs': 'app/configs',
			'routers': 'app/routers',
			'models': 'app/models',
			'collections': 'app/collections',
			'views': 'app/views',
			'templates': 'app/templates',

			// Helper Modules
			'helpers': 'app/helpers',

			// Application
			'app': 'app/app'

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

	define(function (require) {

		var App = require('app');

		App.init({
			'useMinAssets': false
		});

	});

})();