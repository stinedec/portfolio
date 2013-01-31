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
					selectors = [],
					selectorIndex = 0,
					selectorLine = 0,
					isSelector = false,
					cyan = '\u001b[36m';

				_.each(lines, function (line, i) {
					var selectorStart = /[\{]/g.test(line),
						selectorEnd = /[\}]/g.test(line);

					grunt.log.writeln('line ' + i + ': ' + line);

					if (!isSelector && selectorStart) {
						isSelector = true;
						grunt.log.writeln(cyan + 'selector ' + selectorIndex + ' created' + reset);
						selectors[selectorIndex] = [];
					} else if (isSelector && selectorStart) {
						selectors[selectorIndex].sort();
						selectorIndex++;
						selectorLine = 0;
						selectors[selectorIndex] = [];
						grunt.log.writeln(cyan + 'nested selector ' + selectorIndex + ' created' + reset);
					}

					if (isSelector && !selectorStart && !selectorEnd) {
						grunt.log.writeln(cyan + 'adding property ' + selectorLine + ' to selector ' + selectorIndex + reset);
						selectors[selectorIndex][selectorLine] = line;
						selectorLine++;
					}

					if (isSelector && selectorEnd) {
						selectors[selectorIndex].sort();
						isSelector = false;
						selectorIndex++;
						selectorLine = 0;
					}
				});

				selectorIndex = 0;
				selectorLine = 0;
				isSelector = false;

				_.each(lines, function (line, i) {
					var selectorStart = /[\{]/g.test(line),
						selectorEnd = /[\}]/g.test(line);

					if (!isSelector && selectorStart) {
						isSelector = true;
					} else if (isSelector && selectorStart) {
						selectorIndex++;
						selectorLine = 0;
					}

					if (isSelector && !selectorStart && !selectorEnd) {
						grunt.log.writeln(cyan + 'line ' + i + ' *: ' + selectors[selectorIndex][selectorLine] + reset);
						selectorLine++;
					} else {
						grunt.log.writeln('line ' + i + ': ' + line);
					}

					if (isSelector && selectorEnd) {
						isSelector = false;
						selectorIndex++;
						selectorLine = 0;
					}
					
				});

				if (filesComplete ===  filesLength - 1) {
					done( true );
				} else {
					filesComplete++;
				}
			});
		}

	});
};
