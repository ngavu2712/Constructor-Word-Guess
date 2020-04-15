var Letter = require('./letter.js');

function Word (word) {

    this.letter = word.split("").map(function(letter){
        return new Letter (letter)
    })
    


}

module.exports = Word