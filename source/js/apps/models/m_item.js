define(['backbone'], function (Backbone) {
	var PItem = Backbone.Model.extend({
		defaults: {
			title: 'New Item',
			coverimage: 'image.png'
		}
	});

	var Portfolio = Backbone.Collection.extend([
		model: PItem
	]);

	return {
		Model: PItem,
		Collection: Portfolio
	};
})