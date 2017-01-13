import { expect } from 'chai';
import { test } from '../.test-context';
import {
  isLength,
  getLastCharacter,
  excludeLastCharacter,
} from './string';


test(__filename, () => {
  it('isLength', () => {
    expect(isLength(0)('')).to.equal(true);
    expect(isLength(1)('')).to.equal(false);
    expect(isLength(0)('a')).to.equal(false);
    expect(isLength(1)('a')).to.equal(true);
  });

  it('getLastCharacter', () => {
    expect(getLastCharacter('')).to.equal('');
    expect(getLastCharacter('z')).to.equal('z');
    expect(getLastCharacter('abc-xyz')).to.equal('z');
  });

  it('excludeLastCharacter', () => {
    expect(excludeLastCharacter('')).to.equal('');
    expect(excludeLastCharacter('z')).to.equal('');
    expect(excludeLastCharacter('abc-xyz')).to.equal('abc-xy');
  });
});
