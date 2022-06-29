let game1 = new Hangman('hello', 3)
const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#remaining")

puzzleEl.textContent = game1.getPuzzle
guessesEl.textContent =  game1.gameMessage


window.addEventListener('keypress', function (e) {
  const guess = e.key
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle
guessesEl.textContent =  game1.gameMessage

 

})

