/**
 * @module Backbone
 * @submodule Backbone.Router
 * @class Global.AppRouter
 * @constructor
 */

define(function (require) {

	'use strict';

	var Backbone = require('backbone');

	return Backbone.Router.extend({

		initialize: function () {

			log('Backbone : Global : AppRouter : Initialized');
		},

		'routes': {
			'': 'index'
		},

		'index': function () {}

	});

});