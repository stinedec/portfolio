/**
 * build.config.compass
 */
module.exports = function(config) {

  return {

    all: {
      options: {
        relativeAssets: true,
        sassDir: config.css +'/app',
        cssDir: config.cssgen
      }
    }

  };
};
