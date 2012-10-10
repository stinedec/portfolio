module.exports = function(config) {

	return {

		cssmin: {

			global: {
				src: [
					config.stylesheets + '/reset.css',
					config.stylesheets + '/app/app.css',
					config.stylesheets + '/app/print.css'
				],
				dest: config.cssbin + '/app.min.css'
			}

		}

	};
}