/**
 * @module Build
 * @class Build.Config
 * @static
 */
module.exports = function(grunt) {

  var config = {};

  // Config
  config.root  = 'source';
  config.js    = config.root + '/js';
  config.jsmin = config.js + '/min';

  config.css    = config.root + '/css';
  config.cssgen = config.css  + '/generated';
  config.cssmin = config.css  + '/min';
  config.images = config.root + '/img';


  // Project configuration.
  grunt.initConfig({
    clean:     require('./build/config/clean.js')(config),
    watch:     require('./build/config/watch.js')(config),
    concat:    require('./build/config/concat.js')(config),
    imagemin:  require('./build/config/imagemin.js')(config),
    compass:   require('./build/config/compass.js')(config),
    cssmin:    require('./build/config/cssmin.js')(config),
    jshint:    require('./build/config/jshint.js')(config),
    requirejs: require('./build/config/requirejs.js')(config)
  });


  // Load grunt plugins
  require('load-grunt-tasks')(grunt);

  // measures the time each task takes
  require('time-grunt')(grunt);


  /**
   * Default task
   */
  grunt.registerTask('default', [
    // CSS
    'newer:compass:all',// run compass to process scss
    'concat:css',       // concatenate processed css
    'cssmin:css',       // minify concatenated css
    'clean:concatcss',  // delete the concatenated css directory/file

    // JS
    'newer:jshint:all', // run jshint to lint js
    'requirejs:build',  // run require to build and minify js

    // Images
    'newer:imagemin:images' // minify images
  ]);


  /**
   * Build task
   *
   * A full Grunt build of the project.
   * Same task as default without the 'newer' prefix so all files are processed
   */
  grunt.registerTask('build', [
    // CSS
    'compass:all',     // run compass to process scss
    'concat:css',      // concatenate processed css
    'cssmin:css',      // minify concatenated css
    'clean:concatcss', // delete the concatenated css directory/file

    // JS
    'jshint:all',      // run jshint to lint js
    'requirejs:build', // run require to build and minify js

    // Images
    'imagemin:images'  // minify images
  ]);


  /**
   * Cleanup tasks
   *
   * Remove the processed Sass CSS files and require minified js then run the build task
   */
  grunt.registerTask('cleanup', ['clean:generated', 'build']);

};
