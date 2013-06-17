/**
 * @module app
 */

define(['settings',
		'jquery',
		'underscore',
		'modernizr',
		'backbone',
		'swig',
		'helpers/console',
		'helpers/events',
		'helpers/analytics',
		'model/AppConfig',
		'router/AppRouter',
		'view/ExampleView'
	], // end dependencies
	function (settings, $, _, Modernizr, Backbone, Swig, console, Events, Analytics, AppConfig, AppRouter, ExampleView) {

	'use strict';

	var App = {

		"config": new AppConfig(settings),

		"cache": {
			"routers": {},
			"models": {},
			"collections": {},
			"views": {}
		},

		/**
		 * Initialize Application. Responsible for instantiating Backbone router and starting Backbone history.
		 * @method App.initialize
		 */
		"initialize": function () {
			Analytics.initialize({
				"gaAccountId": App.config.get('gaAccountId'),
				"trackingMap": App.trackingMap
			}).pageTrack('/index');

			App.bindCustomEvents();

			App.cache.routers.appRouter = new AppRouter();
			Backbone.history.start();

			App.cache.views.exampleView = new ExampleView();

			console.log('App : Initialized');
			
			return App; // do not use "this" in a static context
		},

		/**
		 * Use this function to bind tracking against any custom event triggered against the app.events dispatch.
		 * @method App.bindCustomEvents
		 */
		"bindCustomEvents": function () {
			

			Events.bind('trackPage', function (pageName) {
				Analytics.pageTrack(pageName);
			});

			console.log('App : Custom Events Binding Complete');
			return App;
		},

		"trackingMap": {
			"click": {
				"section-main": function (e) {
					Analytics.customEventTrack(['param1', 'param2', 'param3']);
				}
			}
		}
	};
	return App;
});