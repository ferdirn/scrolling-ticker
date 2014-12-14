Template.scoreItem.rendered = function() {
	$(this.find('.score')).hide().fadeIn();
}

Blaze.render(Template.scoreItem);