/**
 * @module App
 * @class Global
 * @static
 */

define(['jquery', 'backbone', 'app-utilities', 'app-analytics', 'global-configs', 'global-routers', 'global-views', 'global-templates'], function($, Backbone, Utilities, Analytics, Configs, Routers, Views, Templates) {

	_.extend(App, Backbone.Events);

	return (function() {

		App.$window = $(window);
		App.$html = $(document.documentElement);
		App.$body = $(document.body);

		var self = {

			/**
			 * Make public what ought be public.
			 */
			'views': Views,
			'templates': Templates,
			'routers': Routers,
			'utilities': Utilities,
			'analytics': Analytics,

			/**
			 * Initialize Application. Responsible for instantiating Backbone router
			 * and starting Backbone history.
			 * @method App.Global.init
			 * @param config {Object} JS App configuration object, typically passed from the middle tier.
			 */
			'init': function(config) {

				App.config = new Configs.AppConfig(config);
				App.appRouter = new Routers.AppRouter();
				App.exampleView = new Views.ExampleView();

				Backbone.history.start();

				log('Global : Initialized');

			}
		};

		return self;

	})();

});