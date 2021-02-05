window.addEventListener('DOMContentLoaded', start);

function start() {
    console.log("start");
    //hides scissors and paper images
    document.querySelector("#player1-scissors").classList.add("hidden");
    document.querySelector("#player1-paper").classList.add("hidden");

    document.querySelector("#player2-scissors").classList.add("hidden");
    document.querySelector("#player2-paper").classList.add("hidden");

    startShakeAnimation();
}

function startShakeAnimation() {
    console.log("startShakeAnimation");
    //start shake animation - doesn't work
    document.querySelector("#player1-rock").classList.add("shake");
    document.querySelector("#player2-rock").classList.add("shake");

    getUserSelection();
}

function getUserSelection() {
    console.log("getUserSelection");
    //user clicks rock button
    document.querySelector("button.rock").addEventListener("click", userClicksRock);
    //user clicks paper button
    document.querySelector("button.paper").addEventListener("click", userClicksPaper);
    //user clicks scissors button
    document.querySelector("button.scissors").addEventListener("click", userClicksScissors);

    //makeRandomComputerChoice();
}

function userClicksRock() {
    //not sure if i need this one since it's already rock from the beginnig
    console.log("userClicksRock");
    document.querySelector("button.rock").removeEventListener("click", userClicksRock);
    /*document.querySelector("#player1-rock").classList.remove("hidden");
    document.querySelector("#player1-scissors").classList.add("hidden");
    document.querySelector("#player1-paper").classList.add("hidden");*/
    
    //document.getElementsByClassName("rock").style.backgroundImage = "url(hand_rock.png)";
    
    /*document.querySelector("#player1").classList.add("hidden");
    document.getElementById("player1").style.backgroundImage = "url('hand_rock.png')";*/

    makeRandomComputerChoice()
}

function userClicksPaper() {
    console.log("userClicksPaper");
    document.querySelector("button.paper").removeEventListener("click", userClicksPaper);

    document.querySelector("#player1-rock").classList.add("hidden");
    //document.querySelector("#player1-scissors").classList.add("hidden");
    document.querySelector("#player1-paper").classList.remove("hidden");

    //document.getElementsByClassName("paper").style.backgroundImage = "url(hand_paper.png)";

    /*document.querySelector("#player1").classList.add("hidden");
    document.getElementById("player1").style.backgroundImage = "url('hand_paper.png')";*/

    makeRandomComputerChoice()
}

function userClicksScissors() {
    console.log("userClicksScissors");
    document.querySelector("button.scissors").removeEventListener("click", userClicksScissors);

    document.querySelector("#player1-rock").classList.add("hidden");
    document.querySelector("#player1-paper").classList.add("hidden");
    document.querySelector("#player1-scissors").classList.remove("hidden");

    //document.getElementsByClassName("scissors").style.backgroundImage = "url(hand_scissors.png)";

    /*document.querySelector("#player1").classList.add("hidden");
    document.getElementById("player1").style.backgroundImage = "url('hand_scissors.png')";*/

    makeRandomComputerChoice()
}

function makeRandomComputerChoice() {
    console.log("makeRandomComputerChoice");

    showAnimations();
}

function showAnimations() {
    console.log("showAnimations");
    document.querySelector("#player1").classList.add("player");
    document.querySelector("#player2").classList.add("player");
    
    determineWinner();
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