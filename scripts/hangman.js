class Hangman {
    constructor(word, guesses, lettersGuessed) {
    this.word = word.toLowerCase().split("")
    this.guesses = guesses
    this.lettersGuessed = []
this.status = "playing" }


makeGuess(guess) {
    if (this.status === "playing") {

     guess = guess.toLowerCase()
     const uniqueGuess = !this.lettersGuessed.includes(guess)
     const notIncluded = !this.word.includes(guess)

    if (uniqueGuess) {
        this.lettersGuessed = [guess, ...this.lettersGuessed]
    


    }
if (uniqueGuess && notIncluded) {
    this.guesses--
}

this.game()
    }

    else {}
}

game (){
    let success = true

this.word.forEach((letter) => {
if (this.lettersGuessed.includes(letter) || letter === " ") {}
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

get getPuzzle () {
    let puzzle = ""
 this.word.forEach((letter) => 
 {
 if (this.lettersGuessed.includes(letter) || letter === " " )
 {
 puzzle += letter
 }
 
 else {
    puzzle += "*" 
 }
 
 
 
 })
    return puzzle
 
 
 }


 get gameMessage () {
    if (game1.status === "playing") {
       return `You have ${game1.guesses} guesses remaining`
        }
      
        else if (game1.status === "success") {
          return "Congratulations! You win!"
          
        }
      
        else {
        return `The word was "${game1.word.join("")}"`
         
        }


 }



}


