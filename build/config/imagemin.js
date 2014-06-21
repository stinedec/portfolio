/**
 * build.config.imagemin
 */
module.exports = function(config) {

  return {

    expand: true,
    cwd: config.images,
    src: ['**/*.{png,jpg,gif}'],
    dest: config.images

  };
};
