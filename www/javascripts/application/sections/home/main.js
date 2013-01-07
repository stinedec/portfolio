/**
 * @module Home.main
 */
(function() {
	'use strict';

	require(['../../config'], function (){

		require(['app', 'sections/home/home'], function (App, Home) {

			App.init({
				'useMinAssets': false
			});

			Home.init();

		});
	});

})();