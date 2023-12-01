



///functions
function diceRoll(){  /// roles the dice so players can progress
    let p = Math.floor(Math.random() * 6) + 1
    console.log(p)
    return p
};

function coinFlip(){   ///this Function flips a coin that ultimately starts the game
const rand = Math.random
if (rand < .5){
    return "Heads";
} else { return "Tails"
}}

function start(){
    let flip = diceRoll()
    while (!flip == 5 || !flip == 3){   // ask if "if statement is good" or while loop would be better
        flip = diceRoll() 
    }
}

/*-----Identify and initilize our state Variable---*/
//starting position
let postion1 = 0;
let position2 = 0; /// the number in the position can correlate to the Element Id so i can use the position to target ID and use that number for movement
// Players
const p1 = document.getElementById('.player1') ; ///Ask if I am selecting these 2 correctly 
const p2 = document.getElementById('.player2') ; 

//board and special board spots
const gameBoardArr = [0,0,0,0,0,0,0,0,0,0,0] /// should I make my gameBoard an array or ? and then create a turn function in the game

const gameBoard = document.getElementsByClassName("sp"); //grabbing the entire board
const trapSpot = document.getElementById('trap'); // grabbing the trap spot
const luckySpot = document.getElementById('lucky'); // grabbing the lucky spot


///Event Listeners
//Write a function that matches player position to an element id
// for example
// if player position = 0
// sp1 would have the image in it
// if player position = 3
// sp4 would have the image in it (edited) 
// function movePlayer(){
//     if()
// }

//these are our constants  and are pertaining to yhe state of our game (staring values)
// These are the starting point of our game and can be initialized and changed throughout

// to make players move write a function that matches player position to player ID 
//code the start button
const startGame = document.getElementById("run-it");
//startGame.addEventListener('click', start()) ///?
    

//create a function that makes you roll a 5 or 3 in order to start 
// code the click event listenser
//startGame.addEventListener("click",function that would start the game) ///
// code the event listener to capture that also gives the option to either roll again or capture
// code the event listener for trapSpot
/// code the event listener for luckSpot
/// code the winning logic
// code the startOver logic that goes with trapSpot and capture
//code the start over button
// code the diceRoll Button 





///constants


