let game1 = new Hangman('hello', 3)
const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#remaining")

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent =  `You have ${game1.guesses} guesses remaining`

window.addEventListener('keypress', function (e) {
  const guess = e.key
 
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  guessesEl.textContent =  `You have ${game1.guesses} guesses remaining`

})

