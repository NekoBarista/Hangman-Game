


const Hangman = function(word, guesses, lettersGuessed) {
    this.word = word.toLowerCase().split("")
    this.guesses = guesses
    this.lettersGuessed = [] }


Hangman.prototype.makeGuess = function(guess) {

     guess = guess.toLowerCase()
     const uniqueGuess = !this.lettersGuessed.includes(guess)
     const notIncluded = !this.word.includes(guess)

    if (uniqueGuess) {
        this.lettersGuessed.push(guess)
    }
if (uniqueGuess && notIncluded) {
    this.guesses--
}

}
Hangman.prototype.getPuzzle = function () {
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

game1.makeGuess("c")
game1.makeGuess("z")
game1.makeGuess("e")

console.log(game1.getPuzzle())
console.log(game2.getPuzzle())
console.log(game1.guesses)

