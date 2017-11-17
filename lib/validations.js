'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMatch = exports.isCorrectLength = undefined;

var _utils = require('./utils');

var ID_LENGTH = 13;

var isCorrectLength = exports.isCorrectLength = function isCorrectLength(id) {
  return (0, _utils.compose)(String, _utils.string.isLength(ID_LENGTH))(id);
};

var isMatch = exports.isMatch = function isMatch(controlDigit, checkDigit) {
  return controlDigit === checkDigit;
};