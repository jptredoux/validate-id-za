import {
  getControlDigit,
  getOddIndexCalculatedValue,
  getEvenIndexCalculatedValue,
  getCheckDigit,
} from './calculations';
import {
  isCorrectLength,
  isMatch,
} from './validations';


export default (id) => {
  if (!isCorrectLength(id)) return false;
  const controlDigit = getControlDigit(id);
  const oddIndexCalculatedValue = getOddIndexCalculatedValue(id);
  const evenIndexCalculatedValue = getEvenIndexCalculatedValue(id);
  const checkDigit = getCheckDigit(oddIndexCalculatedValue, evenIndexCalculatedValue);
  return isMatch(controlDigit, checkDigit);
};
