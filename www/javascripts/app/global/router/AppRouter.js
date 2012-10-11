/**
 * @module Backbone
 * @submodule Backbone.Router
 * @class AppRouter
 * @constructor
 */

define(function(require) {

	var Backbone = require('backbone');

	return Backbone.Router.extend({

		initialize: function() {

			log('Backbone : Global : AppRouter : Initialized');
		},

		'routes': {
			'': 'index'
		},

		'index': function() {}

	});

});