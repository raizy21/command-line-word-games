/*
****************************
node pigLatin.js
****************************

Happy -> appyhay
Child -> ildchay
Awesome -> awesomeway
Pig -> igpay
Latin -> atinlay
is -> isway
hard -> ardhay
to -> otay
speak -> eakspay

*/

const prompt = require("prompt"); //require prompt
const cls = require("opensoars_cls"); //require colors terminal

prompt.start(); //start the prompt

//intro
console.log();
let styled_string = cls("*** pig latin ***", "green", ["bold", "underline"]);
console.log(styled_string);

console.log();

//msg for user
styled_string = cls(
  "enter the word you want to convert to pig latin: ",
  "green",
  ["bold", "underline"]
);
console.log(styled_string);

//prompt user input
prompt.get(["userInput"], function (err, result) {
  //error
  if (err) {
    return onErr(err);
  }

  // console.log(result.userInput);

  // error sentence
  if (result.userInput.includes(" ")) {
    styled_string = cls("you should a word not a sentence", "red", [
      "bold",
      "underline",
    ]);
    console.log(styled_string, err);
    return;
  }

  //convert
  console.log(coveterToPigLatin(result.userInput));
});

function coveterToPigLatin(word) {
  let vowels = "aeiouAEIOU";
  let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ";
  let convertedWord = "";

  //check if start with two consonants
  for (let i = 0; i < consonants.length; i++) {
    //first letter a consonant
    if (word[0] === consonants[i]) {
      for (let j = 0; j < consonants.length; j++) {
        //first and second letter consonants
        if (word[0] === consonants[i] && word[1] === consonants[j]) {
          let newWord = word.substring(2, word.length);
          convertedWord =
            newWord + word[0].toLowerCase() + word[1].toLowerCase() + "ay";
          return convertedWord;
        }
      }
    }
  }

  //check if start with consonant
  for (let i = 0; i < consonants.length; i++) {
    //first letter a consonant
    if (word[0] === consonants[i]) {
      let newWord = word.substring(1, word.length);
      convertedWord = newWord + word[0].toLowerCase() + "ay";
      return convertedWord;
    }
  }

  //check if start with a vowel
  for (let i = 0; i < vowels.length; i++) {
    //first letter a vowel
    if (word[0] === vowels[i]) {
      let newWord = word.substring(0, word.length);
      convertedWord = newWord + "way";
      return convertedWord;
    }
  }
}

//error
function onErr(err) {
  console.log(err);
  return 1;
}
