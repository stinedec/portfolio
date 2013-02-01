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
					properties = [],
					isSelector = false,
					nestDepth = 0,
					outputIndex = 0,
					propertiesIndex = 0;

				_.each(lines, function (line) {
					var selectorStart = /\{/g.test(line),
						selectorEnd = /\}/g.test(line);

					if (selectorStart) {
						if (isSelector) {
							nestDepth++;
						}
						output[outputIndex] = line;
						isSelector = true;
						outputIndex++;
					} else if (selectorEnd) {
						if (isSelector) {
							nestDepth--;
							propertiesIndex--;
						}
						output[outputIndex] = line;
						isSelector = false;
						outputIndex++;
					} else if (isSelector) {
						grunt.log.writeln('property: ' + line);
						properties[outputIndex] = line;
						outputIndex++;
					} else {
						output[outputIndex] = line;
						outputIndex++;
					}
				});

				_.each(properties, function (section) {
					grunt.log.writeln(section);
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
