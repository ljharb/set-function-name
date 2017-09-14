(function setFunctionNameDefinition(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but only
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(this, function setFunctionNameFactory() {
  // Just return a value to define the module export.
  return function setFunctionName(fn, name) {
    return Object.defineProperty(fn, 'name', { value: name });
  };
}));
