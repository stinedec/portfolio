/**
 * @module Backbone
 * @submodule Backbone.Collection
 * @class ExampleCollection
 * @constructor
 */

define(['backbone'], function(Backbone) {

	return Backbone.Collection.extend({

		'model': ItemModel,

		'initialize': function() {

			log('Backbone : ExampleCollection : Initialized');

		}

	});

});