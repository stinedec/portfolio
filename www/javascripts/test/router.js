
// Tests : Backbone : Routers

var i, // testing iframe.
	w; // testing iframe's window object.

module("Backbone Routers", {

	setup: function() {

		stop();

		iframeLoad('/', function(iframe){

			i = iframe;
			w = i.contentWindow;
			w.qunits = {};

			w.require(['app-global'], function(AppGlobal) {
				AppGlobal.utilities.init();
				AppGlobal.init();
				w.qunits.AppRouter = new AppGlobal.routers.AppRouter();
			});

			start();

		});

	},

	teardown: function() {
		document.body.removeChild(i);
	}

});

test("AppRouter Exists", function() {
	equal( typeof w.qunits.AppRouter, "object" );
});
