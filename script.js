start();

function start() {
    console.log("start");
    getUserSelection();
}

function getUserSelection() {
    console.log("getUserSelection");

    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    console.log("makeRandomComputerChoice");

    showAnimations();
}

function showAnimations() {
    console.log("showAnimations");
    
    determineWinner();
    }
}

let winner = "";

function determineWinner() {

// FAKED so player always win
winner = "computer";

// if player won
showWin();
}

function showWin() {
    console.log("Show win!");
    //show winner
}

function showLose() {
    console.log("Show lose");
}

function showDraw() {
    console.log("Show draw");
}