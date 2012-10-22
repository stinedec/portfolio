
// Custom iframe loader, with callbacks for qUnit.

var iframeLoad = function(pageURL, cb){

	var iframe = document.createElement('iframe');

	iframe.onload = function(event) {

		// Return iframe to callback.
		cb(event.target);

	};

	iframe.src = pageURL;
	document.body.appendChild(iframe);

}