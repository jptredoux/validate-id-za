'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCheckDigit = exports.getEvenIndexCalculatedValue = exports.getOddIndexCalculatedValue = exports.getControlDigit = undefined;

var _utils = require('./utils');

var getControlDigit = exports.getControlDigit = function getControlDigit(id) {
  return (0, _utils.compose)(String, _utils.string.getLastCharacter)(id);
};

var getOddIndexCalculatedValue = exports.getOddIndexCalculatedValue = function getOddIndexCalculatedValue(id) {
  return (0, _utils.compose)(String, _utils.string.excludeLastCharacter, Array.from, _utils.array.getOddIndexesInArray, _utils.number.addArray)(id);
};

var getEvenIndexCalculatedValue = exports.getEvenIndexCalculatedValue = function getEvenIndexCalculatedValue(id) {
  return (0, _utils.compose)(String, Array.from, _utils.array.getEvenIndexesInArray, _utils.array.toString, Number, _utils.number.multiply(2), String, Array.from, _utils.number.addArray)(id);
};

var getCheckDigit = exports.getCheckDigit = function getCheckDigit(oddIndexCalculatedValue, evenIndexCalculatedValue) {
  return (0, _utils.compose)(_utils.number.addArray, String, _utils.string.getLastCharacter, Number, _utils.number.subtract(10), String, _utils.string.getLastCharacter)([oddIndexCalculatedValue, evenIndexCalculatedValue]);
};