# Constructor-Word-Guess

# What is the game about? 

Contructor word guess is a Node.js based application with interactive prompts on the command-line. The rule of the game is similar to hangman. 

# Technologies

Node JS
JavaScript
Inquirer NPM Package (https://www.npmjs.com/package/inquirer)
Prompt NPM Package (https://www.npmjs.com/package/prompt)

# Components

1. **Letter.js: ** Contains a constructor, Letter. This constructor displays a blank placeholder depending on whether or not the user has guessed the letter.
  * Should nor *require* any other file

1. **Word.js: ** Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.
  * Should *require* Letter.js

1. **index.js: ** The file containing the logic for the course of the game, which depends on Word.js and:

  * Randomly selects a word and uses the Word constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses

# Demo Video






