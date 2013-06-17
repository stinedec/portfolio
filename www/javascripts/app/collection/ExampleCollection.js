/**
 * @module collection/ExampleCollection
 */

define(['backbone', 'model/ExampleModel'], function (Backbone) {

	'use strict';

	return Backbone.Collection.extend({

		"initialize": function () {

			this.model = ExampleModel;

			console.log('Backbone : ExampleCollection : Initialized');

		}

	});

});