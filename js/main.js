/*----- App's Regular State Variables -----*/

var input,
    score,
    board,
    playerTurn,
    game = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

/*----- Cached Element References -----*/

board = document.getElementsByClassName("tile");

score = document.querySelector("h2");

/*----- Event Listeners -----*/
document.querySelector('td').addEventListener('click', handleClick);

document.querySelector('button').addEventListener('click', resetBoard);

/*----- FUNCTIONS -----*/

function init() {
    playerTurn = 0;
    input = 0;
    resetBoard();
    render();
}

function handleClick(evt) {
    if (playerTurn === 0) {
        board[0].innerHTML = 'X';
        playerTurn++;
    } else {
        board[1].innerHTML = '0';
        playerTurn--;
    }
    console.log("Clicky guy");
};

function resetBoard() {
    for (var i = 0; i < board.length; i++) {
        board[i].innerHTML = '';
    }
    playerTurn = 0;
}

function render() {

}

init();