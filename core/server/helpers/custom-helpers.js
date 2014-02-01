var hbs = require('express-hbs');

module.exports = function() {

	hbs.registerHelper('preview', function (options) {
		var length = this.html.indexOf('<!-- more -->');
		console.log(this.html.substring(0, length));
		return new hbs.handlebars.SafeString(
			this.html.substring(0, length)
		);
	});

};

