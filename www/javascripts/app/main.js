/**
 * @module main
 */

(function () {

	'use strict';

	require(['config'], function () {

		require(['global', 'helpers/utilities'], function (App, Utilities) {

			Utilities.initialize();
			App.initialize();

			require(['google-analytics']);

			require(['helpers/analytics', 'facebook'], function (Analytics, Facebook) {
				FB.init({
					'appId': App.config.get('fbAccountId'),
					'xfbml': true
				});
				Analytics.socialTrackFacebook();
			});
		});
		// end require['global']
	});
	// end require['config']
}());