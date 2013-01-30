/*
 * grunt-pretty-sass
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Brandon Minch, contributors
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  // TODO: ditch this when grunt v0.4 is released
  grunt.util = grunt.util || grunt.utils;

  var _ = grunt.utils._,
    fs = require('fs'),
    exec  = require( 'child_process' ).exec,
    commands = [],
    commandIndex = 0;


  grunt.registerMultiTask('pretty-sass', 'Format SASS source files', function() {
    var files = grunt.file.expandFiles(this.file.src),
      tempExt = '_pretty-sass-temp.scss',
      done = this.async();

    _.each(files, function(filepath, i) {
      var tempfile = filepath + tempExt;
      var command = 'sass-convert';

      grunt.file.copy(filepath, tempfile);
      command += ' ' + tempfile + ' ' + filepath;

      commands.push(command);
    });

    runCommands();

    function runCommands () {
      if (commandIndex < commands.length) {
        grunt.log.writeln('tidying up ' + files[commandIndex]);
        exec(commands[commandIndex], afterCommand(commandIndex));

        commandIndex++;
      } else {
        exec(commands[commandIndex], function ( error, stdout, stderr ) {
            grunt.log.writeln('done.');
            done( true );
        });
      }
    }

    function afterCommand(index) {
      return function ( error ) {
        if ( error !== null ) {
            grunt.log.error( error );
            done( false );
        } else {
          fs.unlink(files[index] + tempExt, function ( error ) {
            if ( error !== null ) {
              grunt.log.error( error );
              done( false );
            }
          });
          runCommands();
        }
      };
    }
  });
};
