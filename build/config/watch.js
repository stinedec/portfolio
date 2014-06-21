/**
 * build.config.watch
 */
module.exports = function(config) {

  return {

    files: [
      'build/config/**/*.js', // Grunt config files
      config.css+'/app/**/*.scss',
      config.js +'/**/*.js',
      '!'+ config.js +'/**/*min.js'
    ],

    tasks: ['default']

  };
};
