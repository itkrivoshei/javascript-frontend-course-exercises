/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) {
    return "";
  }

  if (size === undefined) {
    return string;
  }

  let count = 0;
  const finalString = [];

  for (const letter of string) {
    if (finalString[finalString.length - 1] === letter) {
      if (count < size) {
        finalString.push(letter);
        count++;
      }
    } else {
      count = 1;
      finalString.push(letter);
    }
  }

  return finalString.join("");
}
