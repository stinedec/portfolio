/**
 * build.config.concat
 */
module.exports = function(config) {

  return {

    dist: {
      src: [config.cssgen +'/**/*.css'],
      dest: config.css +'/concat/app.css'
    }

  };
};
