'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvenIndexesInArray = exports.getOddIndexesInArray = exports.toString = undefined;

var _number = require('./number');

var toString = exports.toString = function toString(array) {
  return array.join('');
};

var getOddIndexesInArray = exports.getOddIndexesInArray = function getOddIndexesInArray(array) {
  var isDivisibleByTwo = (0, _number.isDivisibleBy)(2);
  return array.filter(function (x, i) {
    return !isDivisibleByTwo(i + 1);
  });
};

var getEvenIndexesInArray = exports.getEvenIndexesInArray = function getEvenIndexesInArray(array) {
  var isDivisibleByTwo = (0, _number.isDivisibleBy)(2);
  return array.filter(function (x, i) {
    return isDivisibleByTwo(i + 1);
  });
};

exports.default = {
  toString: toString,
  getOddIndexesInArray: getOddIndexesInArray,
  getEvenIndexesInArray: getEvenIndexesInArray
};