import { compose, number, string, array } from './utils';


export const getControlDigit = id => (
  compose(
    String,
    string.getLastCharacter,
  )(id)
);

export const getOddIndexCalculatedValue = id => (
  compose(
    String,
    string.excludeLastCharacter,
    Array.from,
    array.getOddIndexesInArray,
    number.addArray,
  )(id)
);

export const getEvenIndexCalculatedValue = id => (
  compose(
    String,
    Array.from,
    array.getEvenIndexesInArray,
    array.toString,
    Number,
    number.multiply(2),
    String,
    Array.from,
    number.addArray,
  )(id)
);

export const getCheckDigit = (oddIndexCalculatedValue, evenIndexCalculatedValue) => (
  compose(
    number.addArray,
    String,
    string.getLastCharacter,
    Number,
    number.subtract(10),
    String,
    string.getLastCharacter,
  )([oddIndexCalculatedValue, evenIndexCalculatedValue])
);
