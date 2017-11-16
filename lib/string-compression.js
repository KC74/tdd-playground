// function stringCompression(string) {
//   let newString = "";

//   let letters = {};

//   for (let i = 0; i < string.length; i++) {
//     if (letters.hasOwnProperty(string[i]) === false) {
//       letters[string[i]] = 1;
//     } else {
//       letters[string[i]] += 1;
//     }
//   }

//   for (let key in letters) {
//     newString += key + letters[key];
//   }

//   return newString;
// }

function stringCompression(str) {
  let temp = []; // used to count number of repeated letters
  let newString = []; // used to store new string
  str = str.split(" ").join(""); // remove all whitespaces
  console.log(str);

  // iterate through the string
  for (let i = 0; i < str.length; i++) {
    // if the current letter is the same as the next
    if (str[i] === str[i + 1]) {
      // store the current letter into a temporary array
      temp.push(str[i]);
    } else {
      // if the temp length is not empty, then the current letter has repeated letters
      if (temp.length > 0) {
        // push the current letter and the number of repeated letters into the new string array
        newString.push(`${str[i]}${temp.length + 1}`);
        // clear the temp array of any letters
        temp.splice(0);
      } else {
        // if there are no repeated letters, push current letter into new string array and count 1
        newString.push(`${str[i]}1`);
      }
    }
  }
  // join the new string array into 1 string
  return newString.join("");
}

module.exports = stringCompression;
