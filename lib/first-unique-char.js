function firstUniqueChar(string) {
  let letters = {};

  for (let i = 0; i < string.length; i++) {
    if (letters.hasOwnProperty(string[i]) === false) {
      letters[string[i]] = 1;
    } else {
      letters[string[i]] += 1;
    }
  }

  for (let letter in letters) {
    if (letters[letter] === 1) {
      return letter;
    }
  }
}

console.time("firstUniqueChar 1");
console.log(firstUniqueChar("dddeeefggghhh"));
console.timeEnd("firstUniqueChar 1");
console.time("firstUniqueChar 2");
console.log(firstUniqueChar("terfg"));
console.timeEnd("firstUniqueChar 2");
console.time("firstUniqueChar 3");
console.log(firstUniqueChar("frof"));
console.timeEnd("firstUniqueChar 3");
console.time("firstUniqueChar 4");
console.log(firstUniqueChar("ttttt"));
console.timeEnd("firstUniqueChar 4");

// module.exports = firstUniqueChar;

function uniqueChar2(string) {
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    var re = new RegExp(letter, "g");

    if (string.match(re).length === 1) {
      return letter;
    } else if (i === string.length - 1) {
      return undefined;
    }
  }
}

console.time("uniqueChar2 1");
console.log(uniqueChar2("dddeeefggghhhd"));
console.timeEnd("uniqueChar2 1");
console.time("uniqueChar2 2");
console.log(uniqueChar2("terfg"));
console.timeEnd("uniqueChar2 2");
console.time("uniqueChar2 3");
console.log(uniqueChar2("frof"));
console.timeEnd("uniqueChar2 3");
console.time("uniqueChar2 4");
console.log(uniqueChar2("ttttt"));
console.timeEnd("uniqueChar2 4");

module.exports = uniqueChar2;
