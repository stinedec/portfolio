
// Tests : Backbone : Routers

var iframe, iframeWindow;

module("Backbone Routers", {

	setup: function() {

		stop();

		iframeLoad('/', function(i){

			iframe = i;
			iframeWindow = i.contentWindow;
			iframeWindow.qunits = {};

			iframeWindow.require(['app-global'], function(AppGlobal) {
				AppGlobal.utilities.init();
				AppGlobal.init();
				iframeWindow.qunits.AppRouter = new AppGlobal.routers.AppRouter();
			});

			start();

		});

	},

	teardown: function() {
		// delete iframeWindow.qunits;
	}

});

test("AppRouter Exists", function() {
	equal( typeof iframeWindow.qunits.AppRouter, "object" );
});
