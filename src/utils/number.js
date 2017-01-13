export const add = number => value => Number(value) + Number(number);
export const subtract = number => value => Number(value) - Number(number);
export const multiply = number => value => Number(value) * Number(number);

export const addArray = array => array.reduce((a, b) => add(a)(b), 0);

export const isDivisibleBy = number => value => value % number === 0;

export default {
  add,
  subtract,
  multiply,
  addArray,
  isDivisibleBy,
};
