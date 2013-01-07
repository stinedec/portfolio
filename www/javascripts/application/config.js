/**
 * @module App.config
 */

(function() {
	require.config({

		'baseUrl': 'javascripts',

		'paths': {

			// Core Libraries
			'jquery': 'lib/jquery-1.8.2.min',
			'underscore': 'lib/underscore-min',
			'backbone': 'lib/backbone-min',

			// Backbone Submodules
			'routers': 'application/routers',
			'models': 'application/models',
			'collections': 'application/collections',
			'views': 'application/views',
			'templates': 'application/templates',

			// Helper Modules
			'helpers': 'application/helpers',

			// Application
			'app': 'application/app',
			'sections': 'application/sections'

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
})();