"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isLength = exports.isLength = function isLength(length) {
  return function (string) {
    return string.length === length;
  };
};

var getLastCharacter = exports.getLastCharacter = function getLastCharacter(string) {
  return string.slice(-1);
};
var excludeLastCharacter = exports.excludeLastCharacter = function excludeLastCharacter(string) {
  return string.slice(0, -1);
};

exports.default = {
  isLength: isLength,
  getLastCharacter: getLastCharacter,
  excludeLastCharacter: excludeLastCharacter
};