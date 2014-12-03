var test = require('tape');
var cssb = require('css-bouncer');
var fixtures = require('./fixtures/css');

test('id in selector', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {});
	var result = linter.lint(fixtures.id);
	t.equal(result.length, 1, 'One error should happen.');
	t.end();
});

test('id not in selector', function (t) {
	var linter = cssb();
	linter.rule('./index.js', {});
	var result = linter.lint(fixtures.noid);
	t.equal(result.length, 0, 'No error should happen.');
	t.end();
});
