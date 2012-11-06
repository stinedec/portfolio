/**
 * @module Backbone
 * @submodule Backbone.View
 * @class IndexView
 * @constructor
 */

var IndexView = Backbone.View.extend({

	'events': {},

	'initialize': function(options) {

		_.bindAll(this);

		this.render();

		log('Backbone : IndexView : Initialized');
	},

	'render': function() {

		var view = this,
			indexTemplate = _.template($('#example-backbone-template').text(), {});

		view.$el.html(indexTemplate);
	}

});