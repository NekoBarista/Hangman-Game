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
  puzzleEl.innerHTML = " "
guessesEl.textContent =  game1.gameMessage

game1.getPuzzle.split('').forEach((letter)=>{
const letterEl = document.createElement('span')
letterEl.textContent = letter
puzzleEl.appendChild(letterEl)

})

}

const newGame = async () => {
  const puzzle = await createPuzzle()
  game1 = new Hangman(puzzle, 5) 
  render()

}

newGame()

document.querySelector('#reset').addEventListener('click', newGame)





