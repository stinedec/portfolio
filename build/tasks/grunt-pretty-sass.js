/*
 * grunt-pretty-sass
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Brandon Minch, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  var _ = grunt.utils._,
    fs = require('fs'),
    exec = require('child_process').exec,
    commands = [],
    commandIndex = 0;


  grunt.registerMultiTask('pretty-sass', 'Format SASS source files', function() {
    var files = grunt.file.expandFiles(this.file.src),
      done = this.async();

    _.each(files, function(filepath, i) {
      var dirtySass = grunt.file.read(filepath),
          command = 'echo \'' + dirtySass + '\' | sass-convert --from scss --to scss --stdin';

      grunt.log.writeln('prettifying: ' + filepath);

      exec(command, function ( error, stdout, stderr ) {
        if ( error !== null ) {
          grunt.log.error( error );
          done( false );
        } else {
          grunt.file.write(filepath, stdout);
          if (i === files.length - 1) {
            done( true );
          }
        }
      });

    });
  });
};
