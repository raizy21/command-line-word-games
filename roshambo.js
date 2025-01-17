/*
**************************
node roshambo.js
node roshambo.js rock
node roshambo.js paper
node roshambo.js scissors
***************************
*/

// Get a word for our roshambo from the command line
const args = process.argv.slice(1);
// Check if the user provided exactly the input
if (args.length !== 2) {
  console.error(
    "please provide exactly a word for our roshambo: rock paper scissors"
  );
  return;
}
//user input
let userInput = String(args[1]);
let choicesMachine;

// console.log("Args: ", userInput);
//get a random number for computer in order to chose a roshambo
function getRandomRoshambo() {
  choicesMachine = Math.floor(Math.random() * 3);

  switch (choicesMachine) {
    case 0:
      return console.log("computer chose rock.");

    case 1:
      return console.log("computer chose paper.");

    case 2:
      return console.log("computer chose scissors.");

    default:
      return console.log(`sorry, there is a error.`);
  }
}

getRandomRoshambo();

//if user chose rock
if (userInput === "rock") {
  switch (choicesMachine) {
    case 0:
      return console.log(
        "rock against rock. equal please enter another roshambo."
      );

    case 1:
      return console.log(
        "rock against paper. you lost. the paper is covering the rock"
      );

    case 2:
      return console.log(
        "rock against scissors. you win. the scissors would need to provide the ability to blitz the stone"
      );

    default:
      return console.log(`sorry, there is a error.`);
  }
}

//if user chose paper
if (userInput === "paper") {
  switch (choicesMachine) {
    case 0:
      return console.log(
        "paper against rock. you win. the paper is covering the rock."
      );

    case 1:
      return console.log(
        "paper against paper. equal please enter another roshambo."
      );

    case 2:
      return console.log(
        "paper against scissors. you lost. i think this is gonna be the most disappointing and predictable fight in history."
      );

    default:
      return console.log(`sorry, there is a error.`);
  }
}

//if user chose scissors
if (userInput === "scissors") {
  switch (choicesMachine) {
    case 0:
      return console.log(
        "scissors against rock. you lost. the paper is covering the rock"
      );

    case 1:
      return console.log(
        "scissors against paper. you win. i think this is gonna be the most disappointing and predictable fight in history."
      );

    case 2:
      return console.log(
        "scissors against scissors. equal please enter another roshambo.."
      );

    default:
      return console.log(`sorry, there is a error.`);
  }
}
