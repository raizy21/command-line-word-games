// Get two numbers from the command line
const args = process.argv.slice(1);
// Check if the user provided exactly the input
if (args.length !== 2) {
  console.error(
    "Please provide exactly a word for our roshambo: rock paper scissors"
  );
  return;
}

const userInput = String(args[1]);

console.log("Args: ", userInput);
