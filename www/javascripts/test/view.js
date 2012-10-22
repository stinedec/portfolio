
// Tests : Backbone : Views

var i, // testing iframe.
	w; // testing iframe's window object.

module("Backbone Views", {

	setup: function() {

		stop();

		iframeLoad('/', function(iframe){

			i = iframe;
			w = i.contentWindow;
			w.qunits = {};

			w.require(['app-global'], function(AppGlobal) {
				AppGlobal.utilities.init();
				AppGlobal.init();
				w.qunits.ExampleView = new AppGlobal.views.ExampleView();
			});

			start();

		});

	},

	teardown: function() {
		document.body.removeChild(i);
	}

});

test("ExampleView Exists", function() {
	equal( typeof w.qunits.ExampleView, "object" );
});
