/**
 * @module Backbone
 * @submodule Backbone.Collection
 * @class ExampleCollection
 * @constructor
 */

define(function(require) {

	var Backbone = require('backbone');

	return Backbone.Collection.extend({

		'model': ItemModel,

		'initialize': function() {

			log('Backbone : ExampleCollection : Initialized');

		}

	});

});