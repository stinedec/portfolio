define(['backbone'], function (Backbone) {
	var View = Backbone.View.extend({
		tagName: 'li',
		template: $('#projectTemplate').html(),
		events: {},
		render: function () {
			var tmpl = _.template(this.template);
			this.$el.html(tmpl(this.model.toJSON()));
		},

		renderProject: function (item) {
			var view = new ProjectView({ model: item });
			this.$el.append(view.render().el);
		}
	});

	return View;
});