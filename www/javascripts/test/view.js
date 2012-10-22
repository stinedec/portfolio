
// Tests : Backbone : Views

var iframe, iframeWindow;

module("Backbone Views", {

	setup: function() {

		stop();

		iframeLoad('/', function(i){

			iframe = i;
			iframeWindow = i.contentWindow;
			iframeWindow.qunits = {};

			iframeWindow.require(['app-global'], function(AppGlobal) {
				AppGlobal.utilities.init();
				AppGlobal.init();
				iframeWindow.qunits.ExampleView = new AppGlobal.views.ExampleView();
			});

			start();

		});

	},

	teardown: function() {
		// delete iframeWindow.qunits;
	}

});

test("ExampleView Exists", function() {
	equal( typeof iframeWindow.qunits.ExampleView, "object" );
});
