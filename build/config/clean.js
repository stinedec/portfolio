/**
 * build.config.clean
 */
module.exports = function(config) {

  return {

    build: {
      src: [config.cssmin, config.cssgen, config.jsmin]
    },

    concatcss: {
      src: [config.css +'/concat']
    }

  };
};
