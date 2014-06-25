/**
 * build.config.concat
 */
module.exports = function(config) {

  return {

    css: {
      src: [config.cssgen +'/**/*.css'],
      dest: config.css +'/concat/app.css'
    }

  };
};
