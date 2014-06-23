/**
 * build.config.watch
 */
module.exports = function(config) {

  return {

    all: {
      files: [
        // Grunt config
        'Gruntfile.js',
        'build/config/**/*.js',

        // JS
        config.js +'/**/*.js',
        '!'+ config.js +'/**/*min.js',

        // CSS
        config.css +'/app/**/*.scss',

        // Images
        config.images +'**/*.{png,jpg,gif}'
      ],

      tasks: ['default']
    }

  };
};
