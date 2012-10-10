/**
 * @module Backbone
 * @submodule Backbone.Router
 * @class AppRouter
 * @constructor
 */

define(['backbone'], function(Backbone) {

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