

function Letter (letter){
   this.Letter = letter;
   this.takeAGuess = false;

   this.getCharacter = function(){
       if(this.Letter === " "){
           this.takeAGuess = true;
           return " ";
       } else if (this.takeAGuess === false) {
           return "_";
       } else {
           return this.Letter;
       }
   }

   this.checkLetter = function (character) {
       if(character === this.letter){
           takeAGuess = true;
       }

   }
   
}

module.exports = Letter;
