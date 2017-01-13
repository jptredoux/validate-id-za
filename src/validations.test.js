import { expect } from 'chai';
import { test } from './.test-context';
import { isCorrectLength, isMatch } from './validations';


test(__filename, () => {
  it('isCorrectLength', () => {
    expect(isCorrectLength()).to.equal(false);
    expect(isCorrectLength('800101500908')).to.equal(false);
    expect(isCorrectLength('80010150090870')).to.equal(false);
    expect(isCorrectLength('8001015009087')).to.equal(true);
  });

  it('isMatch', () => {
    expect(isMatch('7', '8')).to.equal(false);
    expect(isMatch('7', '7')).to.equal(true);
  });
});
