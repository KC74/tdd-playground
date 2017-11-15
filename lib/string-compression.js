function stringCompression(string) {
  let newString = "";

  let letters = {};

  for (let i = 0; i < string.length; i++) {
    if (letters.hasOwnProperty(string[i]) === false) {
      letters[string[i]] = 1;
    } else {
      letters[string[i]] += 1;
    }
  }

  for (let key in letters) {
    newString += key + letters[key];
  }

  return newString;
}

module.exports = stringCompression;
