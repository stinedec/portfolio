/**
 * @module App
 * @class Analytics
 * @static
 */

var App = App || {};

App.Analytics = (function(window, document) {

	var _$window = $(window),
		_$body = $(document.body),
		_trackingMap = {
			'click': {
				'id-of-some-object': {
					'trackFunction': function(e) {
						self.customEventTrack(['param1', 'param2', 'param3']);
					}
				}
			}
		};

	var self = {

		/**
		 * Initializes analytics with the specified GA account.
		 * @method App.Analytics.init
		 * @param account {String} Account ID
		 * @param pageName {String} Page Name
		 */
		'init': function(account, pageName) {
			if (account === undefined) {
				return;
			}

			window._gaq = window._gaq || [];
			window._gaq.push(['_setAccount', account]);

			self.pageTrack(pageName);
			self.delegateEvents(_trackingMap);
			self.bindCustomEvents();

			log("Analytics : Initialized");
		},

		/**
		 * Use this function to bind tracking against any custom event
		 * triggered against the App object.
		 * @method App.Analytics.bindCustomEvents
		 */
		'bindCustomEvents': function() {

			App.bind('customEvent', function(pageName) {
				self.pageTrack(pageName);
			});

		},

		/**
		 * Fires a pageview to the page specified.
		 * @method App.Analytics.pageTrack
		 * @param pageName {String} Name of page to be tracked
		 */
		'pageTrack': function(pageName) {
			if (!pageName) {
				return;
			}
			window._gaq.push(['_trackPageview', pageName]);
		},

		/**
		 * Fires a custom GA event.
		 * @method App.Analytics.customEventTrack
		 * @param args {Array} Array of arguments for custom GA Event
		 */
		'customEventTrack': function(args) {
			window._gaq.push(['_trackEvent', args[0], args[1], args[2]]);
		},

		/**
		 * Tracks Likes/Unlikes via the FB API's events.
		 * @method App.Analytics.socialTrackFacebook
		 */
		'socialTrackFacebook': function() {
			FB.Event.subscribe('edge.create', function(targetUrl) {
				if (_gaq === 'undefined') {
					return;
				}
				window._gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);
			});
			FB.Event.subscribe('edge.remove', function(targetUrl) {
				if (_gaq === 'undefined') {
					return;
				}
				window._gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);
			});
		},

		/**
		 * Tracks Tweets via the twitter API.
		 * @method App.Analytics.socialTrackTwitter
		 */
		'socialTrackTwitter': function() {
			function extractParamFromUri(uri, paramName) {
				if (!uri) {
					return;
				}
				var uri = uri.split('#')[0]; // Remove anchor.
				var parts = uri.split('?'); // Check for query params.
				if (parts.length == 1) {
					return;
				}
				var query = decodeURI(parts[1]);

				// Find url param.
				paramName += '=';
				var params = query.split('&');
				for (var i = 0, param; param = params[i]; ++i) {
					if (param.indexOf(paramName) === 0) {
						return unescape(param.split('=')[1]);
					}
				}
			}

			twttr.events.bind('tweet', function(event) {
				if (event) {
					var targetUrl;
					if (event.target && event.target.nodeName == 'IFRAME') {
						targetUrl = extractParamFromUri(event.target.src, 'url');
					}
					window._gaq.push(['_trackSocial', 'twitter', 'tweet', targetUrl]);
				}
			});
		},

		/**
		 * Creates a delegated event listener on the &lt;body&gt;
		 * and can listen to any type of event on any type of element.
		 * The event handler is responsible for determining if the event
		 * and element exist in a data dictionary (_trackingMap) and
		 * invokes the respective function (usually Omniture tracking).
		 * @method App.Analytics.delegateEvents
		 * @param map {Object} Delegate object
		 */
		'delegateEvents': function(map) {
			var events = [];

			for (var event in map) {
				if (map.hasOwnProperty(event)) {
					events.push(event);
				}
			}

			_$body.on(events.join(' ').toString(), 'div, object, span, p, a, form, input, li, img', function(e, altID) {
				var event = (e.namespace) ? e.type + '.' + e.namespace : e.type,
					link = e.currentTarget,
					selector = altID || link.getAttribute('data-track') || link.id;

				if (typeof map === 'undefined' || typeof map[event] === 'undefined' || typeof map[event][selector] === 'undefined') {
					return;
				}

				var trackElem = map[event][selector];
				if (trackElem) {
					var fn = trackElem.trackFunction;
					if (typeof fn === 'function') {
						switch (selector) {
						default:
							fn.apply(window, [e]);
							break;
						}
					}
				}
			});
		}
	};
	return self;
})(this, this.document);