'use strict';

var $TypeError = TypeError;

module.exports = function setFunctionName(fn, name) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	return Object.defineProperty(fn, 'name', { value: name });
};
