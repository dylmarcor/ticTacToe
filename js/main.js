/*----- App's Regular State Variables -----*/

var input,
score,
playerTurn,
game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
winGame = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], 
["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"],
["1", "5", "9"], ["3", "5", "7"]];

/*----- Cached Element References -----*/

var board = document.querySelectorAll(".tile");
var xScore = document.getElementById(".x-score");
var oScore = document.getElementById(".o-score");
score = document.querySelector("h2");

var x = 0;
var o = 0;

/*----- Event Listeners -----*/
for (var i = 0; i < board.length; i++) {
    board[i].addEventListener('click', handleClick);
}

document.querySelector('button').addEventListener('click', resetBoard);


/*----- FUNCTIONS -----*/


function init() {
    playerTurn = 0;
    input = 0;
    resetBoard();
    render();
}

function handleClick(evt) {
    var content = evt.target.textContent;
    if (content === '' && playerTurn === 0) {
        evt.target.textContent = "X";
        playerTurn = 1;
        x++;
    } else if (content !== "X") {
        evt.target.textContent = '0';
        playerTurn = 0;
        o++;
    }
    console.log("Clicky guy");
};

function resetBoard() {
    for (var i = 0; i < board.length; i++) {
        board[i].textContent = '';
    }
    playerTurn = 0;
}

function render() {
    for (var i = 0;i < game.length;i++) {

    }
}

init();