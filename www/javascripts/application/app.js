/**
 * @module App
 */

define(function (require, exports, module) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Utilities = require('helpers/utilities'),
		App = require('application/index');

	_.extend(App, {

		/**
		 * Initialize Application. Responsible for instantiating Backbone router
		 * and starting Backbone history.
		 * @method Main.init
		 * @param config {Object} JS App configuration object, typically passed from the middle tier.
		 */
		'init': function (config) {

			var config = config || {};

			window.isDebugMode = (!config.useMinAssets) ? true : false;

			Utilities.init();

			this.config = new App.models.AppConfig(config);
			this.router = new App.routers.AppRouter();
			this.collection = new App.collections.ExampleCollection([{'name': 'Carl'}]);

			Backbone.history.start();

			log('Global : Initialized');

		}
	});

	_.extend(App, Backbone.Events);

	exports = _.extend(exports, App);

});