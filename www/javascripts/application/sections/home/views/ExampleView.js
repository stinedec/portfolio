/**
 * @module Backbone
 * @submodule Backbone.View
 * @class Global.ExampleView
 * @constructor
 */

define(function (require) {

	'use strict';

	var _ = require('underscore'),
		Backbone = require('backbone'),
		App = require('app'),
		Home = require('sections/home/home');

	return Backbone.View.extend({

		'events': {},

		'initialize': function (options) {

			_.bindAll(this);

			this.render();

			log('Backbone : Home : ExampleView : Initialized');
		},

		'render': function () {

			var subview = new Home.views.SubView();

		}

	});

});