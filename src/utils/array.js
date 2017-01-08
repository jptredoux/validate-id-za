import { isDivisibleBy } from './number';

export const toString = array => array.join('');

export const getOddIndexesInArray = (array) => {
  const isDivisibleByTwo = isDivisibleBy(2);
  return array.filter((x, i) => !isDivisibleByTwo(i + 1));
};

export const getEvenIndexesInArray = (array) => {
  const isDivisibleByTwo = isDivisibleBy(2);
  return array.filter((x, i) => isDivisibleByTwo(i + 1));
};

export default {
  toString,
  getOddIndexesInArray,
  getEvenIndexesInArray,
};
