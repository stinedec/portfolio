/**
 * @module Backbone
 * @submodule Backbone.View
 * @class ExampleView
 * @constructor
 */

define(['backbone'], function(Backbone) {

	return Backbone.View.extend({

		'events': {},

		'initialize': function(options) {

			_.bindAll(this);

			this.render();

			log('Backbone : Global : ExampleView : Initialized');
		},

		'render': function() {

			var view = this;

		}

	});

});