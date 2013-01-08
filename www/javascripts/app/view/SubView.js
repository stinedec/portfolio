/**
 * @module view/SubView
 */

define(function (require) {

	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.View.extend({

		'events': {},

		'initialize': function (options) {

			_.bindAll(this);

			this.render();

			log('Backbone : Global : SubView : Initialized');
		},

		'render': function () {}

	});

});