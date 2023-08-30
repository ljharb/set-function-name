'use strict';

var test = require('tape');
var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();
var generators = require('make-generator-function')();
var arrows = require('make-arrow-function').list();
var asyncs = require('make-async-function').list();
var asyncGens = require('make-async-generator-function')();
var forEach = require('for-each');
var inspect = require('object-inspect');
var v = require('es-value-fixtures');
var functionName = require('function.prototype.name');

var setFunctionName = require('../');

test('set function name', function (t) {
	forEach(v.nonFunctions, function (nonFunction) {
		t['throws'](
			function () { setFunctionName(nonFunction); },
			TypeError,
			inspect(nonFunction) + ' is not a function'
		);
	});

	t.test('setting the name', { skip: !functionsHaveConfigurableNames }, function (st) {
		var i = 1;
		forEach([].concat(
			function () {},
			function f() {},
			{ inferred: function () {} }.inferred,
			arrows,
			asyncs,
			generators,
			asyncGens
		), function (fn) {
			var origName = functionName(fn);
			i += 1;
			var newName = origName + i;

			var msg = inspect(fn) + ': returns it (' + Function.prototype.toString.call(fn) + ')';
			st.equal(setFunctionName(fn, newName), fn, msg);

			st.equal(
				functionName(fn),
				newName,
				inspect(fn) + ': sets the name from ' + inspect(origName) + ' to ' + inspect(newName)
			);
		});

		st.end();
	});

	t.end();
});
