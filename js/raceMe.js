



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

function startGame(){
    const flip = 0;
    diceRoll(flip);
    if (flip == 5 || flip == 3){   // ask if "if statement is good" or while loop would be better
        return "Start" 
    }
    else return "Try Again"
}

/*-----Identify and initilize our state Variable---*/
//starting position
let postion1 = 0;
let position2 = 0;
// Players
const p1 = document.getElementById('.player1') ; ///Ask if I am selecting these 2 correctly 
const p2 = document.getElementById('.player2') ;

//board and special board spots
const gameBoard = document.getElementsByClassName("sp"); //grabbing the entire board
const trapSpot = document.getElementById('trap'); // grabbing the trap spot
const luckySpot = document.getElementById('lucky'); // grabbing the lucky spot


///Event Listeners


//these are our constants  and are pertaining to yhe state of our game (staring values)
// These are the starting point of our game and can be initialized and changed throughout


//code the start button

//create a function that makes you roll a 5 or 3 in order to start 
// code the click event listenser
// code the event listener to capture that also gives the option to either roll again or capture
// code the event listener for trapSpot
/// code the event listener for luckSpot
/// code the winning logic
// code the startOver logic that goes with trapSpot and capture
//code the start over button
// code the diceRoll Button 





///constants


