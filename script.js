var squares = document.querySelectorAll(".square");
var solveButton = document.getElementById("solve");
var message = document.getElementById("message");

var gameInProgress = true;
var numberSelected = null;

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", selectNumber);
}

solveButton.addEventListener("click", solve);

function selectNumber() {
    if (gameInProgress) {
        if (!numberSelected) {
            this.classList.add("selected");
            numberSelected = this;
        }
        else {
            var temp = numberSelected.innerHTML;
            numberSelected.innerHTML = this.innerHTML;
            this.innerHTML = temp;

            numberSelected.classList.remove("selected");
            numberSelected = null;

            if (isSolved()) {
                solveButton.style.display = "none";
                message.innerHTML = "Good job!";
                gameInProgress = false;
            }
        }
    }
}

function solve() {
    while (!isSolved()) {
        var r1 = Math.floor(Math.random() * squares.length);
        var r2 = Math.floor(Math.random() * squares.length);

        var temp = squares[r1].innerHTML;
        squares[r1].innerHTML = squares[r2].innerHTML;
        squares[r2].innerHTML = temp;
    }

    if (numberSelected) {
        numberSelected.classList.remove("selected");
        numberSelected = null;
    }

    solveButton.style.display = "none";
    message.classList.add("computerSolved");
    message.innerHTML = "This solution was not preprogrammed.";
    gameInProgress = false;
}

function isSolved() {
    return parseInt(squares[0].innerHTML, 10) + parseInt(squares[1].innerHTML, 10) + parseInt(squares[2].innerHTML, 10) == 15 &&
        parseInt(squares[3].innerHTML, 10) + parseInt(squares[4].innerHTML, 10) + parseInt(squares[5].innerHTML, 10) == 15 &&
        parseInt(squares[6].innerHTML, 10) + parseInt(squares[7].innerHTML, 10) + parseInt(squares[8].innerHTML, 10) == 15 &&
        parseInt(squares[0].innerHTML, 10) + parseInt(squares[3].innerHTML, 10) + parseInt(squares[6].innerHTML, 10) == 15 &&
        parseInt(squares[1].innerHTML, 10) + parseInt(squares[4].innerHTML, 10) + parseInt(squares[7].innerHTML, 10) == 15 &&
        parseInt(squares[2].innerHTML, 10) + parseInt(squares[5].innerHTML, 10) + parseInt(squares[8].innerHTML, 10) == 15 &&
        parseInt(squares[0].innerHTML, 10) + parseInt(squares[4].innerHTML, 10) + parseInt(squares[8].innerHTML, 10) == 15 &&
        parseInt(squares[2].innerHTML, 10) + parseInt(squares[4].innerHTML, 10) + parseInt(squares[6].innerHTML, 10) == 15;
}
