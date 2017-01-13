export const isLength = length => string => string.length === length;

export const getLastCharacter = string => string.slice(-1);
export const excludeLastCharacter = string => string.slice(0, -1);

export default {
  isLength,
  getLastCharacter,
  excludeLastCharacter,
};
