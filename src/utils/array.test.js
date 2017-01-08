import { expect } from 'chai';
import { test } from '../.test-context';
import {
  toString,
  getOddIndexesInArray,
  getEvenIndexesInArray,
} from './array';


test(__filename, () => {
  it('toString', () => {
    expect(toString([])).to.equal('');
    expect(toString(['1', '2', '3'])).to.equal('123');
    expect(toString([1, 2, 3])).to.equal('123');
  });

  it('getOddIndexesInArray', () => {
    expect(getOddIndexesInArray([])).to.deep.equal([]);
    expect(getOddIndexesInArray([1])).to.deep.equal([1]);
    expect(getOddIndexesInArray([1, 2])).to.deep.equal([1]);
    expect(getOddIndexesInArray([1, 2, 3])).to.deep.equal([1, 3]);
    expect(getOddIndexesInArray([1, 2, 3, 4])).to.deep.equal([1, 3]);
  });

  it('getEvenIndexesInArray', () => {
    expect(getEvenIndexesInArray([])).to.deep.equal([]);
    expect(getEvenIndexesInArray([1])).to.deep.equal([]);
    expect(getEvenIndexesInArray([1, 2])).to.deep.equal([2]);
    expect(getEvenIndexesInArray([1, 2, 3])).to.deep.equal([2]);
    expect(getEvenIndexesInArray([1, 2, 3, 4])).to.deep.equal([2, 4]);
  });
});
