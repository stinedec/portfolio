/**
 * @module App
 */

define(function (require, exports, module) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		Utilities = require('helpers/utilities'),
		Models = require('models/index'),
		Views = require('views/index'),
		Templates = require('templates/index'),
		Configs = require('configs/index'),
		Routers = require('routers/index'),
		App;

	App = {

		'models': Models,
		'views': Views,
		'templates': Templates,

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

			App.Config = new Configs.AppConfig(config);
			App.Router = new Routers.AppRouter();

			Backbone.history.start();

			var exampleView = new Views.ExampleView();

			log('Global : Initialized');

		}
	};

	_.extend(App, Backbone.Events);

	exports = _.extend(exports, App);
});