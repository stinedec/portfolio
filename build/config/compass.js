/**
 * build.config.compass
 */
module.exports = function(config) {

  return {

    dist: {
      options: {
        relativeAssets: true,
        sassDir: config.css +'/app',
        cssDir: config.cssgen
      }
    }

  };
};
