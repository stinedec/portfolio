
// Tests : Global : Utilities

var i, // testing iframe.
	w; // testing iframe's window object.

module("Global Utilities", {

	setup: function() {

		stop();

		iframeLoad('/', function(iframe){

			i = iframe;
			w = i.contentWindow;
			w.qunits = {};

			w.require(['app-global'], function(AppGlobal) {
				AppGlobal.utilities.init();
				AppGlobal.init();
				w.qunits.utilities = AppGlobal.utilities;
			});

			start();

		});

	},

	teardown: function() {
		document.body.removeChild(i);
	}

});

test("Utilties Exists", function() {
	equal( typeof w.qunits.utilities, "object" );
});
