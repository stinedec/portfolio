/**
 * @module App
 * @submodule App.Global
 * @class App.Global.Utilities
 * @static
 */

define(function(require, exports, module) {

	var $ = require('jquery'),
		_ = require('underscore');

	var self = {

		init: function() {
			self.normalizeLogs();
		},

		/**
		 * Test support for the canvas element
		 * @method Utilities.supportsCanvas
		 */
		'supportsCanvas': function() {
			var canvas = document.createElement('canvas');
			if (canvas.getContext) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Check for support of INPUT placeholder attribute.
		 * @method Utilities.supportsPlaceholder
		 */
		'supportsPlaceholder': function() {
			var i = document.createElement('input');
			if ('placeholder' in i) {
				return true;
			} else {
				return false;
			}
		},

		/**
		 * Use placeholder text when INPUT tag is empty.
		 * @method Utilities.setInputPlaceholder
		 * @param input {String} ID of INPUT tag
		 * @param placeholderTxt {String}
		 */
		'setInputPlaceholder': function(input, placeholderTxt) {
			var $input = $('#' + input),
				placeholder = placeholderTxt;

			$input.val(placeholder).addClass('placeholder').focus(function() {
				if ($input.val() === placeholder) {
					$input.val('').removeClass('placeholder');
				}
			}).blur(function() {
				if ($input.val() === '') {
					$input.val(placeholder).addClass('placeholder');
				}
			});
		},

		/**
		 * Test for support of CSS3 property.
		 * @method Utilities.supportsCss3
		 * @param property {String} property to test
		 */
		'supportsCss3': function(property) {
			var elem = document.body || document.documentElement,
				cssStyle = elem.style;

			// No css support detected
			if (typeof cssStyle === 'undefined') {
				return false;
			}

			// Tests for standard property
			if (typeof cssStyle[property] === 'string') {
				return true;
			}

			// Tests for vendor specific property
			var vendors = ['Moz', 'Webkit', 'Khtml', 'O', 'Ms'],
				len = vendors.length,
				property = property.charAt(0).toUpperCase() + property.substr(1);
			while (len--) {
				if (typeof cssStyle[vendors[len] + property] === 'string') {
					return true;
				}
			}

			return false;
		},

		/**
		 * Test to see if device is an iPad.
		 * @method Utilities.isIpad
		 */
		'isIpad': function() {
			return (navigator.userAgent.match(/iPad/i) === null) ? false : true;
		},

		/**
		 * Strip characters from string that may be used in an XSS attack.
		 * @method Utilities.preventXSS
		 * @param value {String} Property to clean.
		 */
		'preventXSS': function(value) {
			return value.toString().replace(/\<|\>/g, '');
		},

		'setupCustomSelect': function() {
			$('.input-select.custom').each(function() {

				var $this = $(this),
					polyfill = '<span class="selected" /><span class="cap-right"><span class="arrow">&nbsp;</span></span>';

				$this.find('select').wrap('<span />').before(polyfill).bind('change', function() {
					$this.find('.selected').text($.text($this.find(':selected')));
				});

				$this.find('.selected').text($.text($this.find(':selected')));

				$this.find('select').focus(function() {
					$this.addClass('active');
				}).blur(function() {
					$this.removeClass('active');
				});
			});
		},

		/*
		  @description Normalizes the console.log method
		*/
		// usage: log('inside coolFunc',this,arguments);
		// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
		'normalizeLogs': function() {
			window.log = function() {
			/*@cc_on
			  return;
			  @*/
				if (window.isDebugMode) {
					log.history = log.history || []; // store logs to an array for reference
					log.history.push(arguments);
					if (this.console) {
						console.log(Array.prototype.slice.call(arguments));
					}
					if (typeof App !== 'undefined' && typeof App.trigger === 'function') {
						App.trigger('log', arguments);
					}
				} else {
					log.history = log.history || []; // store logs to an array for reference
					log.history.push(arguments);
				}
			};

			/*@cc_on
			  return;
			  @*/
			if (!window.isDebugMode) {
				$(document).keyup(function(e) {
					if (e.keyCode === 192 || e.keyCode === 19) {
						if (window.console) {
							log.history = log.history || []; // store logs to an array for reference
							for (var i = 0, len = log.history.length; i < len; i++) {
								console.log(Array.prototype.slice.call(log.history[i]));
							}
						}
					}
					log.history = [];
				});
			}
		}

	};

	exports = _.extend(exports, self);

});
