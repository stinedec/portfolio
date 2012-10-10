module.exports = function(config) {

	return {

		requirejs: {

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
					out: config.jsbin + '/app.global.min.js'
				}
			}

		}
	};

}