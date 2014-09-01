define(['backbone'], function (Backbone) {
	var Project = Backbone.Model.extend({
		defaults: {
			title: 'New Item',
			coverimage: 'image.png'
		}
	});

	var Portfolio = Backbone.Collection.extend([
		model: Project
	]);

	return {
		Model: Project,
		Collection: Portfolio
	};
})