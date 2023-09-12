'use strict';

var define = require('define-data-property');
var hasDescriptors = require('has-property-descriptors')();

var $TypeError = TypeError;

module.exports = function setFunctionName(fn, name) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (hasDescriptors) {
		define(fn, 'name', name, true, true);
	} else {
		define(fn, 'name', name);
	}
	return fn;
};
