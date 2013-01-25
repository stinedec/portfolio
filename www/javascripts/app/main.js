/**
 * @module main
 */

(function () {

	'use strict';

	require(['config'], function () {

		require(['global'], function (App) {

			App.initialize();

			require(['helpers/analytics', 'google-analytics'], function (Analytics) {
				Analytics.initialize(App.config.get('gaAccountId'));
			});

			require(['helpers/analytics', 'facebook'], function (Analytics) {
				FB.init({
					'appId': App.config.get('fbAccountId'),
					'xfbml': true
				});
				Analytics.socialTrackFacebook();
			});

		});

	});

}());