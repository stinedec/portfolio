/**
 * @module Build
 * @submodule Build.Config
 * @class Build.Config.Stylus
 * @static
 */

module.exports = function(config) {
	var stylus = {

		"prod": {
			"options": {
				"compress":true,
				"urlfunc": 'url', 		 //	Data inlining via data URIs
				"import": ['nib','grid'] // advanced mixins and other useful things https://github.com/visionmedia/nib
			},
			"files": {}
		},
		"dev":{
			"options":{
				"compress":false
			}
		}
	};

	stylus.prod.files[config.cssbin+'/app.css'] = [config.stylesheets+'/stylus/app.styl'];
	stylus.prod.files[config.cssbin+'/print.css'] = config.stylesheets+'/stylus/print.styl';
	stylus.dev.files = stylus.prod.files;
	stylus.dev.options.import = stylus.prod.options.import;
	return stylus;
}