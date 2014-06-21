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
  config.images = config.root + '/images';


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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');


  /**
   * Default task
   */
  grunt.registerTask('default', [
    'compass',         // run compass to process scss
    'concat',          // concatenate processed css
    'cssmin',          // minify concatenated css
    'clean:concatcss', // delete the concatenated css directory/file
    'jshint',          // run jshint to lint js
    'requirejs:build'  // run require to build and minify js
  ]);


  /**
   * Minify tasks
   *
   * Run the default task then losslessly minify images
   */
  grunt.registerTask('minify', ['default', 'imagemin']);


  /**
   * Cleanup tasks
   *
   * Remove the processed Sass CSS files and require minified js then run the default task
   */
  grunt.registerTask('cleanup', ['clean', 'default']);

};
