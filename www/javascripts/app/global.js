/**
 * @module global
 */

define(function (require, exports, module) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Utilities = require('helpers/utilities'),
		App = require('app/index'),
		settings = require('settings');

	_.extend(App, {

		/**
		 * Initialize Application. Responsible for instantiating Backbone router
		 * and starting Backbone history.
		 * @method App.initialize
		 * @param config {Object} JS App configuration object, typically passed from the middle tier.
		 */
		'initialize': function (config) {

			var exampleView;

			config = config || {};

			Utilities.initialize();

			this.config = new App.models.AppConfig(settings);
			this.router = new App.routers.AppRouter();

			Backbone.history.start();

			exampleView = new App.views.ExampleView();

			log('Global : Initialized');

		}
	});

	_.extend(App, Backbone.Events);

	exports = _.extend(exports, App);

});