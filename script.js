let squares = document.getElementsByClassName(`square`)
let solveButton = document.getElementById(`solveButton`)
let messageParagraph = document.getElementById(`messageParagraph`)

let gameOver = false
let selectedSquare

for (let square of squares) {
  square.addEventListener(`click`, clickSquare)
}

solveButton.addEventListener(`click`, startSolve)

function clickSquare() {
  if (!gameOver) {
    if (selectedSquare == null) {
      selectedSquare = this
      selectedSquare.classList.add(`selected`)
    }
    else {
      let temp = selectedSquare.innerHTML
      selectedSquare.innerHTML = this.innerHTML
      this.innerHTML = temp

      selectedSquare.classList.remove(`selected`)
      selectedSquare = null

      if (isSolved()) {
        solveButton.style.display = `none`
        messageParagraph.innerHTML = `Good job!`
        gameOver = true
      }
    }
  }
}

function startSolve() {
  if (selectedSquare != null) {
    selectedSquare.classList.remove(`selected`)
    selectedSquare = null
  }

  solveButton.style.display = `none`
  messageParagraph.classList.add(`small`)
  messageParagraph.innerHTML = `Solving...`

  setTimeout(solve, 10)
}

function solve() {
  while (!isSolved()) {
    let randomNumber1 = Math.floor(Math.random() * squares.length)
    let randomNumber2 = Math.floor(Math.random() * squares.length)

    let temp = squares[randomNumber1].innerHTML
    squares[randomNumber1].innerHTML = squares[randomNumber2].innerHTML
    squares[randomNumber2].innerHTML = temp
  }

  messageParagraph.innerHTML = `This solution was not preprogrammed.`
  gameOver = true
}

function isSolved() {
  return Number(squares[0].innerHTML) + Number(squares[1].innerHTML) + Number(squares[2].innerHTML) == 15 &&
    Number(squares[3].innerHTML) + Number(squares[4].innerHTML) + Number(squares[5].innerHTML) == 15 &&
    Number(squares[6].innerHTML) + Number(squares[7].innerHTML) + Number(squares[8].innerHTML) == 15 &&
    Number(squares[0].innerHTML) + Number(squares[3].innerHTML) + Number(squares[6].innerHTML) == 15 &&
    Number(squares[1].innerHTML) + Number(squares[4].innerHTML) + Number(squares[7].innerHTML) == 15 &&
    Number(squares[2].innerHTML) + Number(squares[5].innerHTML) + Number(squares[8].innerHTML) == 15 &&
    Number(squares[0].innerHTML) + Number(squares[4].innerHTML) + Number(squares[8].innerHTML) == 15 &&
    Number(squares[2].innerHTML) + Number(squares[4].innerHTML) + Number(squares[6].innerHTML) == 15
}