"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var compose = function compose() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (initialValue) {
    return args.reduce(function (accumulator, currentValue) {
      return currentValue(accumulator);
    }, initialValue);
  };
};

exports.default = compose;