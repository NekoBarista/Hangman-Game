


const Hangman = function(word, guesses, lettersGuessed) {
    this.word = word.toLowerCase().split("")
    this.guesses = guesses
    this.lettersGuessed = []
this.status = "playing" }

Hangman.prototype.game = function (){
    let success = true

this.word.forEach((letter) => {
if (this.lettersGuessed.includes(letter)) {}
else {
    success = false
}

  }  )


  if (this.guesses === 0) {
    this.status = 'failed'
}

else if (success) {
this.status= "success"
}

else {
    this.status="playing"
}
}

Hangman.prototype.makeGuess = function(guess) {
    if (this.status === "playing") {

     guess = guess.toLowerCase()
     const uniqueGuess = !this.lettersGuessed.includes(guess)
     const notIncluded = !this.word.includes(guess)

    if (uniqueGuess) {
        this.lettersGuessed.push(guess)
    }
if (uniqueGuess && notIncluded) {
    this.guesses--
}

this.game()
    }

    else {}
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




