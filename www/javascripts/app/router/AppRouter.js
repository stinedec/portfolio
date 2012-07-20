/**
 * @module Backbone
 * @submodule Backbone.Router
 * @class AppRouter
 * @constructor
 */

var AppRouter = Backbone.Router.extend({

	initialize: function() {

		log('Backbone : AppRouter : Initialized');
	},

	'routes': {
		'': 'index'
	},

	'index': function() {
	}

});