/**
 * @module Backbone
 * @submodule Backbone.Collection
 * @class Global.ExampleCollection
 * @constructor
 */

define(function (require) {

	var Backbone = require('backbone'),
		Models = require('global-models');

	return Backbone.Collection.extend({

		'model': Models.ExampleModel,

		'initialize': function () {

			log('Backbone : ExampleCollection : Initialized');

		}

	});

});