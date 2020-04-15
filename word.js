var Letter = require('./letter.js');

function Word (word) {

    this.word = word;
    this.letters = [];

    /*this.letter = word.split("").map(function(letter){
        return new Letter (letter)
    })*/

    this.makeLetter = function(){
        const wordArray = this.word.split("");
        for(var i = 0; i< wordArray.length; i++){
            const newCharacter = new Letter (wordArray[i]);
            this.letters.push(newCharacter);
        }
    }

    this.makeGuess = function (guess) {
        this.letters.forEach(letter => {
            letter.checkLetter(guess);
        })
        
    }

    this.update = function () {
        let printedWord = "";
        this.letters.forEach(letter => {
            printedWord += letter.getCharacter() + " ";
        })
        return printedWord;
    }

}

module.exports = Word