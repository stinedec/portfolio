
var iframeLoad = function(pageURL, cb){

	var iframe = document.createElement('iframe');

	iframe.onload = function(event) {

		// Return iframe to callback.
		cb(iframe);

	};

	iframe.src = pageURL;
	document.body.appendChild(iframe);

}

var iframeUnload = function(iframe){

	document.body.removeChild(iframe);

}