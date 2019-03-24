const Hangman = function(word,guesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = guesses
    
    this.guessedLetters = []

}

Hangman.prototype.makeAGuess = function(guess)
{
    guess = guess.toLowerCase();
   if(!this.guessedLetters.includes(guess))
   {
       this.guessedLetters.push(guess);
       if(!this.word.includes(guess))//for bad guess
       this.remainingGuesses--;
   }
}

Hangman.prototype.getPuzzle = function()
{
    let puzzzle = "";
   
       this.word.forEach((char)=>{
      
        if(char !== ' '  &&  !this.guessedLetters.find(function(char1){
            return char1 === char
        }))
        {
            puzzzle+='*'
        }
         else{
            puzzzle+=char;
        }
    })
   
   return puzzzle;
}


const game1 = new Hangman('cat',2)




window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    game1.makeAGuess(guess);
    console.log(game1.remainingGuesses)

console.log(game1.getPuzzle());
 // console.log(e)
})
  