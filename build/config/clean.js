/**
 * build.config.clean
 */
module.exports = function(config) {

  return {

    generated: {
      src: [config.cssmin, config.cssgen, config.css +'/concat', config.jsmin]
    },

    concatcss: {
      src: [config.css +'/concat']
    }

  };
};
