let game1 


const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#remaining")


window.addEventListener('keypress', (e) => {
  const guess = e.key
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle
guessesEl.textContent =  game1.gameMessage
render()
})


const render = () => {
  puzzleEl.textContent = game1.getPuzzle
guessesEl.textContent =  game1.gameMessage

}

const newGame = async () => {
  const puzzle = await createPuzzle()
  game1 = new Hangman(puzzle, 5) 
  render()

}

newGame()

document.querySelector('#reset').addEventListener('click', newGame)





