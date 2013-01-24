/**
 * @module view/SubView
 */

define(function (require) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('global');

	return Backbone.View.extend({

		'events': {},

		'initialize': function (options) {

			_.bindAll(this);

			this.render();

			log('Backbone : Global : SubView : Initialized');
		},

		'render': function () {
			this.$el.append(_.template(App.templates.ExampleTemplate, {
				'url': 'https://github.com/cpbtechnology/US-boilerplate-backbonejs'
			}));
		}

	});

});