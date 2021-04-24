const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphaM = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
const num = "0123456789";
const numM = [
  "-----",
  ".----",
  "..---",
  "...--",
  "....-",
  ".....",
  "-....",
  "--...",
  "---..",
  "----.",
];
const spacer = "/";

const englishToMorseMkr = function () {
  let myMap = new Map();
  [...alpha].forEach((element, index) => {
    myMap.set(element, alphaM[index]);
  });
  [...num].forEach((element, index) => {
    myMap.set(element, numM[index]);
  });
  return myMap;
};
const morseToEnglishMkr = function () {
  let myMap = new Map();
  [...alphaM].forEach((element, index) => {
    myMap.set(element, alpha[index]);
  });
  [...numM].forEach((element, index) => {
    myMap.set(element, num[index]);
  });
  return myMap;
};

// basically main.
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// console.log("Input in English and it will be translated to morse code.");
// readline.question("Here => ", (input) => {
//   if (input.match(/[A-Za-z]/)) {
//     eToM(input);
//   } else {
//     mToE(input);
//   }
//   readline.close();
// });

// translates english to morse code (str to print(str))
const eToM = function (str) {
  const englishToMorse = englishToMorseMkr(); // Map object for english to morse

  let arr = str.split(" ");
  let final = "";
  arr = spaceRmovr(arr);
  arr.forEach((element) => {
    [...element].forEach((e) => {
      final += englishToMorse.get(e.toUpperCase());
      final += " ";
    });
    final += spacer + " ";
  });
  final = final.slice(0, -2);
//   console.log(final);
  return final;
};

// translates morse code to english (str to print(str))
const mToE = function (str) {
  const morseToEnglish = morseToEnglishMkr(); // Map object for morse to english

  let arr = str.split("/");
  let temp = [];
  let final = "";
  arr.forEach((element) => {
    temp = element.split(" ");
    temp = spaceRmovr(temp);
    temp.forEach((e) => {
      final += morseToEnglish.get(e);
    });
    final += " ";
  });
//   console.log(final);
  return final;
};

// removes the extra blank spaces
const spaceRmovr = function (arr) {
  let temp = [];
  arr.forEach((element) => {
    if (element !== "") {
      temp.push(element);
    }
  });
  return temp;
};
export { eToM,  mToE};
