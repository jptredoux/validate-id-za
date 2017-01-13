import { expect } from 'chai';
import { test } from '../.test-context';
import {
  add,
  subtract,
  multiply,
  addArray,
  isDivisibleBy,
} from './number';


test(__filename, () => {
  it('add', () => {
    const addOne = add(1);
    const addTwo = add(2);
    const addString = add('1');

    expect(addOne(1)).to.equal(2);
    expect(addOne('2')).to.equal(3);
    expect(addTwo(1)).to.equal(3);
    expect(addTwo('2')).to.equal(4);
    expect(addString(2)).to.equal(3);
  });

  it('subtract', () => {
    const subtractOne = subtract(1);
    const subtractTwo = subtract(2);
    const subtractString = subtract('1');

    expect(subtractOne(1)).to.equal(0);
    expect(subtractOne('2')).to.equal(1);
    expect(subtractTwo(1)).to.equal(-1);
    expect(subtractTwo('2')).to.equal(0);
    expect(subtractString(2)).to.equal(1);
  });

  it('multiply', () => {
    const multiplyOne = multiply(1);
    const multiplyTwo = multiply(2);
    const multiplyString = multiply('1');

    expect(multiplyOne(1)).to.equal(1);
    expect(multiplyOne('2')).to.equal(2);
    expect(multiplyTwo(1)).to.equal(2);
    expect(multiplyTwo('2')).to.equal(4);
    expect(multiplyString(2)).to.equal(2);
  });

  it('addArray', () => {
    expect(addArray([])).to.equal(0);
    expect(addArray([1])).to.equal(1);
    expect(addArray([1, 2])).to.equal(3);
  });

  it('isDivisibleBy', () => {
    const isDivisibleByTwo = isDivisibleBy(2);

    expect(isDivisibleByTwo(1)).to.equal(false);
    expect(isDivisibleByTwo(2)).to.equal(true);
    expect(isDivisibleByTwo(3)).to.equal(false);
    expect(isDivisibleByTwo(4)).to.equal(true);
  });
});
