'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _calculations = require('./calculations');

var _validations = require('./validations');

exports.default = function (id) {
  if (!(0, _validations.isCorrectLength)(id)) return false;
  var controlDigit = (0, _calculations.getControlDigit)(id);
  var oddIndexCalculatedValue = (0, _calculations.getOddIndexCalculatedValue)(id);
  var evenIndexCalculatedValue = (0, _calculations.getEvenIndexCalculatedValue)(id);
  var checkDigit = (0, _calculations.getCheckDigit)(oddIndexCalculatedValue, evenIndexCalculatedValue);
  return (0, _validations.isMatch)(controlDigit, checkDigit);
};