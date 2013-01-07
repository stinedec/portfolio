/**
 * @module App.index
 */

define(function(require) {

	return {

		'routers': {
			'AppRouter': require('routers/AppRouter')
		},

		'models': {
			'AppConfig': require('models/AppConfig'),
			'ExampleModel': require('models/ExampleModel')
		},

		'collections': {
			'ExampleCollection': require('collections/ExampleCollection')
		},

		'views': {
			'ExampleView': require('views/ExampleView'),
			'SubView': require('views/SubView')
		},

		'templates': {
			'ExampleTemplate': require('plugins/text!templates/ExampleTemplate.html')
		}

	};

});