let game1 = new Hangman('hello', 3)
const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#remaining")

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent =  `You have ${game1.guesses} guesses remaining`

window.addEventListener('keypress', function (e) {
  const guess = e.key
  if (game1.status === "playing") {
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  guessesEl.textContent =  `You have ${game1.guesses} guesses remaining`
  }

  else if (game1.status === "success") {
    puzzleEl.textContent = "Congratulations! You win!"
    guessesEl.textContent =  ""
  }

  else {
    puzzleEl.textContent = `Sorry - you lose! The word was "${game1.word.join("")}"`
    guessesEl.textContent =  ""
  }
})

