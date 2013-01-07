/**
 * @module Backbone
 * @submodule Backbone.Collection
 * @class Global.ExampleCollection
 * @constructor
 */

define(function (require) {

	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone'),
		App = require('app');

	return Backbone.Collection.extend({

		'initialize': function () {

			this.model = App.models.ExampleModel;

			log('Backbone : ExampleCollection : Initialized');

		}

	});

});