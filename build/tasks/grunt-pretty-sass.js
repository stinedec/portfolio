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
		exec = require('child_process').exec;

	grunt.registerMultiTask('pretty-sass', 'Format SASS source files', function() {
		var files = grunt.file.expandFiles(this.file.src),
			done = this.async(),
			filesComplete = 0;

		_.each(files, function(filepath, i) {
			var dirtySass = grunt.file.read(filepath),
					command = 'sass-convert --from scss --to scss --indent t --in-place ' + filepath,
					cyan = '\u001b[36m',
					reset = '\u001b[0m';

			grunt.log.writeln(cyan + 'prettifying: ' + reset + filepath);

			exec(command, function ( error, stdout, stderr ) {
				if ( error !== null ) {
					grunt.log.error( filepath + ': ' + error );
					done( false );
				} else {
					if (filesComplete === files.length - 1) {
						done( true );
					} else {
						filesComplete++;
					}
				}
			});

		});
	});
};
