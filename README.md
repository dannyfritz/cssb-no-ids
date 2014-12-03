cssb-no-ids
====================

A css-bouncer plugin for ensuring there are no ID's in your CSS.

## Usage

```js
var cssb = require('css-bouncer');
var linter = cssb();
linter.rule('cssb-no-ids');
var result = linter.lint('.class element#id {}');
console.log(result);
//[ { location: '1:1',
//    level: 'error',
//    message: 'ID selectors are not allowed! #id is an ID selector.' } ]
```
