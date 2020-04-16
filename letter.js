

function Letter (letter){
   this.letter = letter;
   this.takeAGuess = false;


   this.getCharacter = function(){
       if(this.letter === " "){
           this.takeAGuess = true;
           return " ";
       } else if (this.takeAGuess === false) {
           return "_";
       } else {
           return this.letter;
       }
   }

   this.checkLetter = function (character) {
       if(character === this.letter){
           takeAGuess = true;
       }

   }
   
}

module.exports = Letter;
