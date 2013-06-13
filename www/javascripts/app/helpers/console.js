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
			if (settings.debug===true) {
				console[methodName] = function () {
					if (original && methodName in original) {
						
						if (typeof original[methodName]==='function') {
							original[methodName].apply(original, arguments);
						} else {
							// IE<10 does not extend native Object and Function types
							// therefore .apply does not work so instead we just execute the function
							// once for each argument
							for (var i=0; i<arguments.length; i++) {
								original[methodName](arguments[i]);
							}
						}
					}
				};
			} else {
				console[methodName] = function () {}; // if debug is not explicitly turned on, do nothing with console methods
			}

		}(methods[i]);
	}

	return console;

});



