const setFunctionName = require('..')
const assert = require('assert')

function functionDeclaration() {}
assert.equal(functionDeclaration.name, 'functionDeclaration')
setFunctionName(functionDeclaration, 'updated declaration')
assert.equal(functionDeclaration.name, 'updated declaration')

const functionExpression = function () {}
assert.equal(functionExpression.name, 'functionExpression')
setFunctionName(functionExpression, 'updated expression')
assert.equal(functionExpression.name, 'updated expression')

const functionExpressionArrow = () => {}
assert.equal(functionExpressionArrow.name, 'functionExpressionArrow')
setFunctionName(functionExpressionArrow, 'updated arrow')
assert.equal(functionExpressionArrow.name, 'updated arrow')

class Klass {}
assert.equal(Klass.name, 'Klass')
setFunctionName(Klass, 'updated class name')
assert.equal(Klass.name, 'updated class name')

const func = function declaration() {}
const obj1 = {
  m1() { },
  m2: function () { },
  ['m' + '3']: () => {},
  func
};
assert.equal(obj1.m1.name, 'm1')
assert.equal(obj1.m2.name, 'm2')
assert.equal(obj1.m3.name, 'm3')
assert.equal(obj1.func.name, 'declaration')

assert.equal(setFunctionName(obj1.m1, 'updated m1').name, 'updated m1')
assert.equal(setFunctionName(obj1.m2, 'updated m2').name, 'updated m2')
assert.equal(setFunctionName(obj1.m3, 'updated m3').name, 'updated m3')
assert.equal(setFunctionName(obj1.func, 'updated func').name, 'updated func')
