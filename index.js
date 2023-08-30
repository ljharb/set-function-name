module.exports = function setFunctionName(fn, name) {
  return Object.defineProperty(fn, 'name', { value: name });
};
