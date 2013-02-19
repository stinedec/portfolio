/*
 * grunt-pretty-sass
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Brandon Minch
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

	'use strict';

	var _ = grunt.utils._,
		fs = require('fs'),
		exec = require('child_process').exec,
		filesLength = 0,
		filesComplete = 0,
		cyan = '\u001b[36m',
		reset = '\u001b[0m';

	grunt.registerMultiTask('pretty-sass', 'Format SASS source files', function() {
		var files = grunt.file.expandFiles(this.file.src),
			done = this.async();

		filesLength = files.length;

		_.each(files, function(filepath, i) {
			var dirtySass = grunt.file.read(filepath),
					command = 'sass-convert --from scss --to scss --indent t --in-place ' + filepath;

			grunt.log.writeln(cyan + 'prettifying: ' + reset + filepath);

			exec(command, function ( error, stdout, stderr ) {
				if ( error !== null ) {
					grunt.log.error( filepath + ': ' + error );
					done( false );
				} else {

				alphaebetize(filepath);

				}
			});
		});

		function alphaebetize(filepath) {
			fs.readFile(filepath, function(err, data) {
				if (err) throw err;

				var lines = data.toString().split("\n"),
					output = [],
					outputIndex = 0,
					isSelector = false,
					nestDepth = 0,
					selectorIndex = 0,
					selectors = [];

				_.each(lines, function (line) {
					var selectorStart = /\{/g.test(line),
						selectorEnd = /\}/g.test(line);

					if (selectorStart) {
						if (!isSelector) {
							isSelector = true;
						} else {
							nestDepth++;
						}
					
						selectorIndex = selectors.length;
						selectors[selectorIndex] = [];

						output[outputIndex] = line + ' :selectorStart';
						outputIndex++;
						output[outputIndex] = selectors[selectorIndex];
						outputIndex++;
					} else if (selectorEnd) {
						if (nestDepth > 0) {
							nestDepth--;
						} else {
							isSelector = false;
						}
						selectorIndex--;
						output[outputIndex] = line + ' :selectorEnd';
						outputIndex++;
					} else if (isSelector) {
						selectors[selectorIndex].push(line + ' :isSelector ' + selectorIndex);
					} else {
						output[outputIndex] = line + ' :output';
						outputIndex++;
					}

				});
				_.each(selectors, function(selector) {
					if (_.isArray(selector)) {
						selector.sort();
					}
				});
				var flat = _.flatten(output);
				var outputString = '';
				_.each(flat, function (section) {
					outputString += section + '\n';
				});

				fs.writeFile(filepath + '_alphabetized.scss', outputString, 'utf8', function() {
					if (filesComplete ===  filesLength - 1) {
						done( true );
					} else {
						filesComplete++;
					}
				});

			});
		}

	});
};
