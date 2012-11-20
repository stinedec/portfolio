module.exports = function(config) {

	return {

		global: {
			options: {
				name: 'app/global/config',
				baseUrl: config.javascripts,
				mainConfigFile: config.javascripts + '/app/global/config.js',
				// Exclusions from minconcat use empty:
				paths: {
					'jquery': 'empty:',
					'underscore': 'empty:',
					'backbone': 'empty:'
				},
				has: {
					'useMinAssets': true
				},
				out: config.jsbin + '/app.global.min.js'
			}
		},

		home: {
			options: {
				name: 'app/sections/home/config',
				baseUrl: config.javascripts,
				mainConfigFile: config.javascripts + '/app/sections/home/config.js',
				// Exclusions from minconcat use empty:
				paths: {
					'jquery': 'empty:',
					'underscore': 'empty:',
					'backbone': 'empty:',
					'global': 'empty:'
				},
				has: {
					'useMinAssets': true
				},
				out: config.jsbin + '/app.home.min.js'
			}
		}

	};

}