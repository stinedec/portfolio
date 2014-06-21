/**
 * build.config.cssmin
 */
module.exports = function(config) {

  return {

    options: {
      report: 'min',
    },

    minify: {
      expand: true,
      cwd: config.css +'/concat/',
      src: ['**/*.css'],
      dest: config.cssmin +'/',
      ext: '.min.css'
    }

  };
};
