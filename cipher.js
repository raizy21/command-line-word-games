const prompt = require("prompt"); //require prompt
const cls = require("opensoars_cls"); //colors terminal

prompt.start(); //start the prompt

//intro
console.log();
let styled_string = cls("*** cesar cipher ***", "blue", ["bold", "underline"]);
console.log(styled_string);

//encrypt or decrypt
console.log();
styled_string = cls("do you want to encrypt or decrypt?", "blue", [
  "bold",
  "underline",
]);
console.log(styled_string);

//prompt user Input
prompt.get(["userInput"], function (err, result) {
  //error
  if (err) {
    return onErr(err);
  }

  //encrypt
  if (result.userInput.toLocaleLowerCase() === "encrypt") {
    styled_string = cls("encrypt was selected", "green");
    console.log(styled_string);

    console.log();
    styled_string = cls("enter the key (1 through 26):", "blue", [
      "bold",
      "underline",
    ]);
    console.log(styled_string);

    //prompt key to encrypt string
    prompt.get(["keyInput"], function (err, keyInput) {
      //convert to a int
      let userInputShiftNumber = Number(Object.values(keyInput).join(""));

      //error
      if (err) {
        return onErr(err);
      }

      //error not a number
      if (isNaN(userInputShiftNumber)) {
        styled_string = cls("you should enter a number :", "red", [
          "bold",
          "underline",
        ]);
        console.log(styled_string, err);
        return;
      }

      //error not between 0 and 26
      if (userInputShiftNumber < 0 || userInputShiftNumber > 26) {
        styled_string = cls("number should be between 0 and 26  :", "red", [
          "bold",
          "underline",
        ]);
        console.log(styled_string, err);
        return;
      }

      console.log();
      styled_string = cls("enter the text you want to encrypt :", "blue", [
        "bold",
        "underline",
      ]);
      console.log(styled_string);

      //prompt user input text
      prompt.get(["userInputText"], function (err, text) {
        if (err) {
          return onErr(err);
        }
        let userInputText = text.userInputText.toLocaleLowerCase();

        styled_string = cls("encrypt message :", "blue", ["bold", "underline"]);
        console.log(styled_string + crypt(userInputShiftNumber, userInputText));
      });
    });

    //decrypt
  } else if (result.userInput.toLocaleLowerCase() === "decrypt") {
    styled_string = cls("decryption was selected", "green");
    console.log(styled_string);
    console.log();

    styled_string = cls("enter the key number (1 through 26) :", "blue", [
      "bold",
      "underline",
    ]);
    console.log(styled_string);
    console.log();

    //prompt key to decrypt string
    prompt.get(["keyInput"], function (err, keyInput) {
      //convert to a int
      let userInputShiftNumber = Number(Object.values(keyInput).join(""));

      //error
      if (err) {
        return onErr(err);
      }

      //check if is not a number
      if (isNaN(userInputShiftNumber)) {
        styled_string = cls("you should enter a number :", "red", [
          "bold",
          "underline",
        ]);
        console.log(styled_string, err);
        return;
      }

      //check if is between 0 and 26
      if (userInputShiftNumber < 0 || userInputShiftNumber > 26) {
        styled_string = cls("number should be between 0 and 26 :", "red", [
          "bold",
          "underline",
        ]);
        console.log(styled_string, err);
        return;
      }
      console.log();
      styled_string = cls("enter the text you want to decrypt: ", "blue", [
        "bold",
        "underline",
      ]);
      console.log(styled_string);

      //prompt user Input text
      prompt.get(["userInputText"], function (err, text) {
        if (err) {
          return onErr(err);
        }

        let userInputText = text.userInputText.toLocaleLowerCase();
        styled_string = cls("decrypt message :", "blue", ["bold", "underline"]);
        console.log(styled_string + crypt(userInputShiftNumber, userInputText));
      });
    });

    //error
  } else {
    styled_string = cls("error you have to encrypt or decrypt", "red", [
      "bold",
      "underline",
    ]);
    console.log(styled_string);
  }
});

function crypt(userInputShiftNumber, userInputText) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let cipherText = "";
  let cipherTextIndex = userInputShiftNumber;

  console.log();
  for (let i = 0; i < userInputText.length; i++) {
    if (userInputText[i] === " ") {
      cipherText += " ";
    } else {
      let letterSplit = letters.split("");
      let index = letterSplit.findIndex(
        (letter) => letter === userInputText[i]
      );

      cipherTextIndex = index + userInputShiftNumber;

      if (cipherTextIndex >= 26) {
        cipherTextIndex -= 26;
      }
      cipherText += letterSplit[cipherTextIndex];
    }
  }
  return cipherText;
}

function onErr(err) {
  console.log(err);
  return 1;
}
