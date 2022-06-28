const Hangman = function(word, guesses) {
    this.word = word
    this.guesses = guesses
}

let game1 = new Hangman('hello', 3)
let game2 = new Hangman ('dance', 2)

console.log(game1)
console.log(game2)