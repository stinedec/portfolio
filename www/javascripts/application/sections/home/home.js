/**
 * @module Home
 */

define(function (require, exports, module) {

	'use strict';

	var $ = require('jquery'),
		_ = require('underscore'),
		Backbone = require('backbone'),
		App = require('app'),
		Home = require('sections/home/index');

	_.extend(Home, {

		'init': function() {

			var exampleView = new Home.views.ExampleView();

			log('Home : Initialized');
		}

	});

	exports = _.extend(exports, Home);

});