define(['backbone', 'apps/views/v_project'], function (Backbone, ProjectView) {
	var View = Backbone.View.extend({
		tagName: 'ul',
		render: function () {
			this.$el.html('');
			var that = this;
			_.each(this.collection.models, function(item) {
			that.renderProject(item);
			}, this);

			return this;
		},

		renderProject: function (item) {
			var view = new ProjectView({ model: item });
			this.$el.append(view.render().el);
		}
	});

	return View;
});