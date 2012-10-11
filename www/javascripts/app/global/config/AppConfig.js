/**
 * @module Backbone
 * @submodule Backbone.Model
 * @class AppConfig
 * @constructor
 */

define(function(require) {

	var Backbone = require('backbone');

	return Backbone.Model.extend({

		'defaults': {},

		'initialize': function(options) {
			_.extend(this.defaults, options);
		},

		'propertyAsBool': function(prop) {

			if (!this.get(prop)) {
				return;
			}

			switch (this.get(prop).toString().toLowerCase()) {
			case 'true':
			case 'yes':
			case '1':
				return true;
			case 'false':
			case 'no':
			case '0':
			case null:
				return false;
			}
		}
	});

});