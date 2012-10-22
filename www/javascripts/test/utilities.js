
// Tests : Global : Utilities

var iframe, iframeWindow;

module("Global Utilities", {

	setup: function() {

		stop();

		iframeLoad('/', function(i){

			iframe = i;
			iframeWindow = i.contentWindow;
			iframeWindow.qunits = {};

			iframeWindow.require(['app-global'], function(AppGlobal) {
				AppGlobal.utilities.init();
				AppGlobal.init();
				iframeWindow.qunits.utilities = AppGlobal.utilities;
			});

			start();

		});

	},

	teardown: function() {
		// delete iframeWindow.qunits;
	}

});

test("Utilties Exists", function() {
	equal( typeof iframeWindow.qunits.utilities, "object" );
});
