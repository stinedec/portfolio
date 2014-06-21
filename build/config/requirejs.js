/**
 * build.config.requirejs
 */
module.exports = function(config) {

  return {

    build: {
      options: {
        name: 'apps/master/app',
        findNestedDependencies: true,
        baseUrl: config.js +'/',
        mainConfigFile: config.js +'/main.js',
        out: config.jsmin + '/app.min.js',
        paths: {
          'settings':'empty:',
          'master':  'empty:'
        }
      }
    }

  };
};
