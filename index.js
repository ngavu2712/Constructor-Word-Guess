
var Word = require ('./word.js');
var inquirer = require ('inquirer');
var prompt = require ('prompt');

//invoke the word constructor
/* Creating 5 functions to make game logic
1st function: startGame
2nd function: playGame
3rd function: getWord;
4rd function: makeGuess;
5rd function: continuePrompt;
*/
var wordBank = ["hobbit","inferno","creative","cruise","moutain"];

var guesses;
var chosenWords;
var word;
var pickedWord;

function startGame(){
    chosenWords =[];
    console.log('Welcome to Word Guess Game');
    console.log('--------------------------');
    playGame();
}

function playGame () {
    pickedWord = "";
    guesses = 6;
    
    if(chosenWords.length < wordBank.length){
        pickedWord = getWord();
    } else {
        console.log("You Win!")
        continuePrompt();
    }
    if(pickedWord) {
        word = new Word(pickedWord);
        word.makeLetters();
        makeGuess();
    }

}

function getWord() {
    let rand = Math.floor(Math.random() * wordBank.length);
    let randomWord = wordBank[rand];
    if(chosenWords.indexOf(randomWord) === -1) {
        chosenWords.push(randomWord);
        return randomWord;
    } else {
        return gerWord();
    }
}

function makeGuess(){
    let checker = [];
    inquirer.prompt ([
        {
            name: "Guessed Letter",
            message: word.update()+ "Guess a letter!"+ "Guesses left:" + guesses
        }
    ]).then(data => {
        word.letters.forEach(letter => {
            letter.checkLetter(data.guessedLetter);
            checker.push(letter.getCharacter());
        });
        if(guesses > 0 && checker.indexOf("_") !== -1){
            guesses --;
            if(guesses === 0) {
                console.log('You run out of guesses! Game Over');
                continuePrompt();
            }else {
                makeGuess();
            }
        } else {
            console.log("You got the word");
            console.log(word.update());
            playGame();
        }
    })
}

function continuePrompt () {
    inquirer.prompt ([
        {
            name: "continue",
            type: "list",
            message: "Would you like to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(data => {
        if(data.continue === "Yes") {
            startGame();
        }else {
            console.log("Thanks for playing")
        }
    })
}

startGame();