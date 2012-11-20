/**
 * @module App
 * @submodule App.Home
 * @class App.Home.Index
 * @static
 */

define(function (require, exports, module) {

	var _ = require('underscore');

	var self = {

		/**
		 * Initialize Application. Responsible for instantiating Backbone router
		 * and starting Backbone history.
		 * @method App.Home.init
		 * @param config {Object} JS App configuration object, typically passed from the middle tier.
		 */
		'init': function (config) {

			log('Section : Home : Initialized');

		}
	};

	exports = _.extend(exports, self);

});