/*
* util.profiling.js
*
*/

// usage: log('inside coolFunc',this,arguments);
// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function() {
	log.history = log.history || [];   // store logs to an array for reference
	log.history.push(arguments);
	if(this.console){
		console.log( Array.prototype.slice.call(arguments) );
	}
};


/*
*
* Author: CP+B | Justin H Johnson (jhjohnson@cpgroup.com)
*
*	Description: Binds to all functions within a namespace (e.g. TRON, AX) and monitors
*			performance of said functions using YUI 3 Profiler.
*	Usage: 
*			Step 1: Update namespace passed into the UTIL.Profiler IIFE
*			Step 2: Use the following functions in the console:
*				
*				- UTIL.Profiler.getReport()
*					Full report of all functions and timers. (also bound to the ~ key [US] and F15 [Swedish])
*
*				- UTIL.Profiler.timer(String timername)
*					Wrap and execute timers to test snippets of code.
*
*	Implements: YUI 3 Profiler, log() by Paul Irish
*
*/

var UTIL = UTIL || {};

UTIL.Profiler = (function(window, document) {

	var Y,
			output = log,
			contextObj = {},
			unregArray = [];
	
	var self = {

		'init': function(NS, NSasStr) {
		
			/***************************/
			/* Event listeners         */
			/***************************/
			
			//Bind this to an element with id #log to add one-click profiling
			$("#log").bind("click", function(e) {
				self.getReport();
			});

			log("Profiler bindings complete");

			$(document).keyup(function(e) {
				if (e.keyCode === 192 || e.keyCode === 19) { //binds the reporting function to ~ (US) or F15 (Swedish)
					self.getReport();
				}
			});
    
			/***************************/
			/* Init										 */
			/***************************/
			if (typeof YUI === "undefined") return;
			Y = YUI().use('profiler', function(Y) { return Y });
			Y.Profiler.registerObject(NSasStr, NS, true);
			/*for(prop in NS) {
				for(childProp in NS[prop]) {
					contextObj = NS[prop];
					if (typeof childProp === 'string' && typeof NS[prop][childProp] === 'function') {
						Y.Profiler.registerFunction(NSasStr + "." + prop + "." + childProp, contextObj);
					//	unregArray.push(NSasStr + "." + prop + "." + childProp);
					}
				}
			}*/
		//	self.getReport();
		}, //end init
		
		'getReport': function() {
			/*
			*	getAverage(name) - returns the average amount of time (in milliseconds) that the function takes to complete.
			*	getCallCount(name) - returns the number of times that the given function was called.
			*	getMax(name) - returns the maximum amount of time (in milliseconds) that the function takes to complete.
			*	getMin(name) - returns the minimum amount of time (in milliseconds) that the function takes to complete.
			*	getReport(name) - returns an object containing all of the profiling information for the function.
			*/
			/*  */
			if (typeof YUI === "undefined") return;
			self.logReport(Y.Profiler.getFullReport(function(report) { return (report.calls > 0); }), "Full");
			/*  */
		}, //end getReport
		
		'timer': function(name) {
			/*  */
			if (typeof YUI === "undefined") return;
		
			switch(name) {
				case "looptime":
					Y.Profiler.start(name);
						for (var i=0; i < 10000000; i++)	{
							var foo = i;
						}
					Y.Profiler.stop(name);
					self.logReport(Y.Profiler.getReport(name), "Timer (" + name + ")");
					break;
				default:
					output("Pass the name of a timer");
					break;
			}
			/*  */
		}, //end timer
		
		'logReport': function(report, type, funcName) {
			/*  */
			log("/**********************/");
			log(type + " report (in ms)");
			log("/**********************/");
			var reportStr = "",
					isObj = true;
			for(k in report) {
				if (typeof report[k] !==  "object") {
					reportStr += " | " + k + " " + report[k];
					isObj = false;
				} else if (!report[k].push) {
					reportStr = k + ":";
					for(j in report[k]) {
						reportStr += " | " + j + " " + report[k][j]
					}
					output(reportStr);
				}
			}
			if (!isObj) output(reportStr);
			
			/*  */
		} //end logReport
	};
	return self;
	
})(this, this.document);