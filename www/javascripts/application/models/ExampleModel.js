/**
 * @module Backbone
 * @submodule Backbone.Model
 * @class Global.ExampleModel
 * @constructor
 */

define(function (require) {

	'use strict';

	var Backbone = require('backbone');

	return Backbone.Model.extend({

		'defaults': {
			'name': 'John'
		},

		'initialize': function () {}

	});

});