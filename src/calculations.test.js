import { expect } from 'chai';
import { test } from './.test-context';
import {
  getControlDigit,
  getOddIndexCalculatedValue,
  getEvenIndexCalculatedValue,
  getCheckDigit,
} from './calculations';


test(__filename, () => {
  const idNumber = '8001015009087';

  it('getControlDigit', () => {
    expect(getControlDigit(idNumber)).to.equal('7');
  });

  it('getOddIndexCalculatedValue', () => {
    expect(getOddIndexCalculatedValue(idNumber)).to.equal(13);
  });

  it('getEvenIndexCalculatedValue', () => {
    expect(getEvenIndexCalculatedValue(idNumber)).to.equal(20);
  });

  it('getCheckDigit', () => {
    expect(getCheckDigit(13, 20)).to.equal('7');
  });
});
