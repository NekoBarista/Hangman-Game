const Hangman = function(word, guesses, lettersGuessed) {
    this.word = word.toLowerCase().split("")
    this.guesses = guesses
    this.lettersGuessed = "h, e" }

Hangman.prototype.getPuzzle = function (guess) {
   let puzzle = ""
this.word.forEach((letter) => 
{
if (this.lettersGuessed.includes(letter) || letter === "" )
{
puzzle += letter
}

else {
   puzzle += "*" 
}



})
   return puzzle

    
}


let game1 = new Hangman('hello', 3)
let game2 = new Hangman ('dance', 2)

console.log(game1.getPuzzle("h e"))
console.log(game2.getPuzzle("d a"))

