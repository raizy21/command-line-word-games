# command line word games

A small code of interactivity with command-line, based on working with Node.js, console and terminal.

- [node.js](https://nodejs.org/en)
- [node.js wiki](https://en.wikipedia.org/wiki/Node.js)
- [command line](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).
- [console](https://developer.mozilla.org/en-US/docs/Web/API/console).

Made just for fun.

### contributions

- [Andrei](https://github.com/raizy21) is maintainer for this repository.

### quick overview

Check out the [source code](https://github.com/raizy21/command-line-word-games).

### roshambo.js

- Description: Implement a basic Rock Paper Scissors game.
- Requirements:
  The program should take the player’s move as an input from process.argv.
  The program should randomly generate a move for the computer.
  Determine the winner based on the rules of Rock Paper Scissors.
  Output the result (win, lose, or draw) to the console.
  Example:
  node rockPaperScissors.js rock
  # Output: rock against paper. you lost. the paper is covering the rock

### pigLatin.js

- Description: Create a program that translates English text to Pig Latin.
- Requirements:
  The program should take an English word as an input from prompt.
  Convert each word to Pig Latin:
  If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.” Example: Happy = appyh + ay = appyhay
  If a word starts with two consonants move the two consonants to the end of the word and add “ay.” Example: Child = Ildch + ay = Ildchay
  If a word starts with a vowel add the word “way” at the end of the word. Example: Awesome = Awesome +way = Awesomeway
  Output the translated word to the console.

  node pigLatin.js Happy

  # Output: appyhay

  node pigLatin.js Child

  # Output: ildchay

  node pigLatin.js Awesome

  # Output: Awesomeway

### cipher.js

- Description: Implement a basic Caesar Cipher encryption.
- Requirements:
  The program should take a phrase and a shift number as inputs from prompt.
  Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
  Case insensitive
  Shift means 26 letter the english alphabet. "abcdefghijklmnopqrstuvwxyz" - you can count.
  Output the encrypted phrase to the console.
  Example:
  node caesarCipher.js "hello world" 3
  # Output: khoor zruog

### conclusion

This project will enhance your skills with hands-on experience in Node.js, creating command-line tools and working with console .

## contributing

The main purpose of this repository is to work with Node.js, console and terminal, making it faster and easier to use.
We are grateful to have people for contributing bugfixes and improvements.
