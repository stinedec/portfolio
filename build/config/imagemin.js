/**
 * build.config.imagemin
 */
module.exports = function(config) {

  return {

    images: {
      expand: true,
      cwd: config.images,
      src: ['**/*.{png,jpg,gif}'],
      dest: config.images
    }

  };
};
