/**
 * config
 */
module.exports = function() {

  var config = {
    root:  'source',
    js:    config.root + '/js',
    jsmin: config.js   + '/min',

    css:    config.root + '/css',
    cssgen: config.css  + '/generated',
    cssmin: config.css  + '/min',

    images: config.root + '/images'
  };

  return config;
};
