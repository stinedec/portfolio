/**
 * @module main
 */

(function () {

	'use strict';

	require(['config'], function () {

		require(['global'], function (App) {

			App.init();

		});

	});

}());