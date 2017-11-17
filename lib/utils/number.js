"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = exports.add = function add(number) {
  return function (value) {
    return Number(value) + Number(number);
  };
};
var subtract = exports.subtract = function subtract(number) {
  return function (value) {
    return Number(value) - Number(number);
  };
};
var multiply = exports.multiply = function multiply(number) {
  return function (value) {
    return Number(value) * Number(number);
  };
};

var addArray = exports.addArray = function addArray(array) {
  return array.reduce(function (a, b) {
    return add(a)(b);
  }, 0);
};

var isDivisibleBy = exports.isDivisibleBy = function isDivisibleBy(number) {
  return function (value) {
    return value % number === 0;
  };
};

exports.default = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  addArray: addArray,
  isDivisibleBy: isDivisibleBy
};