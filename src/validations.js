import { string, compose } from './utils';

const ID_LENGTH = 13;


export const isCorrectLength = id => (
  compose(
    String,
    string.isLength(ID_LENGTH),
  )(id)
);

export const isMatch = (controlDigit, checkDigit) => (
  controlDigit === checkDigit
);
