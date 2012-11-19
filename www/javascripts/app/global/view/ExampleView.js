/**
 * @module Backbone
 * @submodule Backbone.View
 * @class Global.ExampleView
 * @constructor
 */

define(function(require) {

	var _ = require('underscore'),
		Backbone = require('backbone');

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