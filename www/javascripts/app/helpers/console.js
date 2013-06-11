/**
 * @module helpers/console
 */

define(['settings'], function (settings) {

	'use strict';

	/*
	 * Normalize the console for older browsers
	 * only output if settings.debug is set to true
	 */
	var original = window.console;
	var console  = window.console = {};
	var methods = ['assert', 'count', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'trace', 'warn'];
	
	for (var i = methods.length; i--;) {
		+function (methodName) {
			console[methodName] = function () {
				if (settings.debug && (original && methodName in original)) {
					original[methodName].apply(original, arguments);
				}
			};
		}(methods[i]);
	}

	return console;

});



