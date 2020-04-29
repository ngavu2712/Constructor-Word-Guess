var Letter = require('./letter.js');

function Word (word) {

    this.word = word;
    this.letters = word.split("").map(character => new Letter(character)) //word.split return raw array of letter splitted from the word. 
    //Map() is used to loop through the array and return a new array of letter objects that are drawn from Letter constructor
// var sentence = "The Quick Brown Fox"
// var words = sentence.split(" ") // ["the","quick","brown","fox"]
// var words = sentence.split("") //["t","h","e"," ","q","u","i","c","k"," ","b","r","o","w","n"," ","f","o","x"]
    

    /*this.letter = word.split("").map(function(letter){
        return new Letter (letter)
    })*/


 /*   this.makeLetter = function(){
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
    }*/

}

module.exports = Word;