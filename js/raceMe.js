/*-----Identify and initilize our state Variable---*/

///state variables
const player1 = {
  canPlay: false,
  currentPosition: 0,
  element: document.getElementById("player1"),
};
const player2 = {
  canPlay: false,
  currentPosition: 0,
  element: document.getElementById("player2"),
};




let turn = 1; // will always be 1 for p1 or -1 for p2
let current;
let winner = 1 || 2 || null; // will either be p1 or p2 if neither
const board = [
  "sp0",
  "sp1",
  "sp2",
  "sp3",
  "sp4",
  "sp5",
  "sp6",
  "sp7",
  "sp8",
  "sp9",
  "sp10",
  "sp11",
  "sp12",
];

gameStarted = false;

///
// cached DOM elements
/// grab our HTML elements and save them to variables to use later
const messageEl = document.querySelector("h2");
const turnEl = document.querySelector("h3");
const gameBoard = document.getElementsByClassName("sp"); //grabbing the entire board
const trapSpot = document.getElementById("trap"); // grabbing the trap spot
const luckySpot = document.getElementById("lucky"); // grabbing the lucky spot
const restartButton = document.getElementById("runItBack"); //grabbing run it back / restart button
const startButton = document.getElementById("start")
  .addEventListener("click", startGame); // grabbing start button
const resultDisplay = document.getElementById("display");
restartButton.style.visibility = "hidden";


//code the start button
/// Event Listeners ///
// grabbing the roll-dice button
const diceDisplay = document.getElementById("rollDice");
// click event listener
diceDisplay.addEventListener("click", function () {
  diceRoll();});

restartButton.addEventListener("click", function() {

})

function limit(num){
  num < 14;
}



let currentPlayer = player1;

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    turn = 1;
  }
}

function changeCurrentPlayer() {
  // console.log("current player is ", currentPlayer)
  turn = turn === 1 ? 2 : 1;
  console.log("turn " + turn);
  if (turn === 1) {
    currentPlayer = player1;
    turnEl.innerText = "Tiger's Turn";

  } else {
    currentPlayer = player2;
    turnEl.innerText = "Gorilla Turn";
  }
}

let roll;
function diceRoll() {
  console.log("player's " + turn + " turn");
  /// roles the dice so players can progress //attach to roll the dice button
  // checking whether resulr is 5 or 3 so we can start game
  // if gameStarted is true then the game can officially start and players can progress
  if (gameStarted === true) {
    // roll simulates the dice rolling and finds a random number 1-6
    roll = Math.floor(Math.random() * 6) + 1;
    // use this to TEST TRAP SPOT
   //roll = 5;
    console.log("roll result ", roll);
    // will print a message on the screen of the result of the most previous roll
    resultDisplay.textContent = "Result of Roll: " + roll;
    // checks if the player rolling rolled a 5 or a 3 so they can advance on their following turn
    if (roll === 5 || roll === 3) {
      // if player rolled 5 or 3 set can play from false to true now allowing progression
      if (currentPlayer.canPlay === false) {
        currentPlayer.canPlay = true;
      }else {
        // once canPlay is set to true move player function is called with the roll results inside of it telling the player how many spots to move
        movePlayer(roll)
        console.log(turn + "rolled " + roll); //prints the turn p1 =1 and p2 =1 followed by the number they rolled
      }
    } else if (currentPlayer.canPlay === true){
      // checking if player can move and if  they can checks if player's roll is less then 13 which is the lenth of the board
      
        // if move is valid so the result of the proggresion is less then the size of the board allow player to move
      movePlayer(roll);
    }
    // not going to execute unless gameStarte == false
  } else {
    // checks if player landed in trapspot and adjust player piece then prints message, NOTE move this to the move player function
    if (checkTrap()) {
      resultDisplay.textContent = "Yikes you landed in the Trap Spot ";
    } else {
      //checks if player landed in luckspot and adjust player piece then prints message
      if (checkLuck()) {
        resultDisplay.textContent("Nice You landed in the Lucky Spot ");
      }
    }
  }
  changeCurrentPlayer();
}

function movePlayer(roll) { // this function is supposed to allow players to progress adding where they are currently at with the result of the dice roll
  console.log(currentPlayer +"= player and position = " + currentPlayer.currentPosition)
  //  takes the player's current postion and increments it by the roll they got 
  
  console.log(" currentPlayer.CurrentPostion: " + currentPlayer.currentPosition);
// checks if player's move is outside of the scope of the board
  if (currentPlayer.currentPosition + roll > board.length - 1) {
    currentPlayer.currentPosition = board.length - 1
    // NOTE IF PLAYER GOES OFF THE BOARD MOVE DOES NOT COUNT
    console.log("Player went off the board");
     //exits if statement checking scope of the board
  }else {
      currentPlayer.currentPosition += roll ;
  }
  // checks where the player is reffering it  to the gameboard array
  current = gameBoard[currentPlayer.currentPosition];
  current.append(currentPlayer.element);
  console.log("currentPlayer: " + current);
  checkTrap()
  checkLuck()
  checkWinner()

} 

// getWinner --> checks to see if we have a winner / if player lands on final spot
function renderMessage() {
  if (winner == 1) {
    messageEl.innerText = " Tiger Wins the Race !!";
  } else if (winner === 2) {
    messageEl.innerText = " Bear Wins the Race !!";
  } else if (winner === null) messageEl.innerText = " Who is going to win ? !!";
}





// this function checks if player landed in trap spot and sends them back to starting spot

function checkTrap(player) {
  // this function is supposed to check if they player landed at the trapspot then send them to the beggining spot of the game
  if (currentPlayer.currentPosition  === 5) {  // checking i
    setTimeout(function(){


    console.log(currentPlayer.currentPosition);
    currentPlayer.currentPosition = 0; // this is setting the current postion equal to 0 sending the player back to the starting spot
    console.log("Check Trap was hit");
    current = gameBoard[currentPlayer.currentPosition];
    current.append(currentPlayer.element)
    turnEl.innerText = "TRAP WAS HIT SPOT TO THE BACK YOU GO !" // changing text letting player know they hit the booby trap
  },500)
  } ///once player starts back I want the message to go away
}
// this function checks if player landed in lucky spot and awards them with another roll
function checkLuck(player) {
  if (currentPlayer.currentPosition === 6 && turn != null) {  //checking if player hit the lucky spot
    console.log("CHECK LUCK WAS HIT !!!");
    diceRoll(), console.log("re-roll"); // roll was awarded to player who hit lucky spot might want to ad a delya
  }
} // will putting these functions in the movePlayer function simulate the whole game ??

// will check if player has hit final spot and increment winner by the player's number and end the
function checkWinner() {
console.log("player1",player1)
console.log("player2",player1)
  if (player1.currentPosition === 12) {
    winner = 1 ;
    console.log("Winner is ", winner)
    messageEl.innerText = "Game Over !"
    gameStarted = false
  } else if (player2.currentPosition === 12) {
    winner = 2;
    console.log("Winner is ", winner)
    messageEl.innerText = "Game Over !"
    gameStarted = false
  } 
}

