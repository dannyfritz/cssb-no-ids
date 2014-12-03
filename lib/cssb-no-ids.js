var _ = require('lodash');

var defaults = {};

var errorTemplate = _.template(
	'ID selectors are not allowed! ' +
	'<%= id %> is an ID selector.'
);

module.exports = {
	selector: function (reporter, node, options) {
		var options = _.defaults(options, defaults);
		var ids = node.selector.match(/#[\w]+/gi, '$1');
		if (_.size(ids) > 0) {
			_.each(ids, function (id) {
				reporter.error(errorTemplate({options: options, id: id}));
			});
		}
	}
}
