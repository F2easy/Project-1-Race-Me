



///functions


function coinFlip(){   ///this Function flips a coin that ultimately starts the game //attach to run it button
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


///state variables

let turn = 0  // will always be 1 for p1 or 2 for p2 
let winner = null // will either be p1 or p2
const board = ['sp0','sp1','sp2','sp3','sp4','sp5','sp6','sp7','sp8', 'sp9','sp10','sp11' ];
///
// cached DOM elements
/// grab our HTML elements and save them to variables to use later
const messageEl = document.querySelectorAll('h2') 
const gameBoard = document.getElementsByClassName("sp"); //grabbing the entire board
const trapSpot = document.getElementById('trap'); // grabbing the trap spot
const luckySpot = document.getElementById('lucky'); // grabbing the lucky spot
const runItBackButton = document.getElementById('runItBack'); //grabbing run it back / restart button
const startButton = document.getElementById('start') // grabbing start button
const  rollDiceButton = document.getElementById('rollDice') // grabbing roll the dice button


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
/// Event Listeners ///
const startGame = document.getElementById("run-it");
//startGame.addEventListener('click', start()) ///?
    

//PseudoCode
//player needs to roll the dice

//Number Appears
//Number is attached to a variable

//variable determines how many spots a player gets to progress
// contact the dom to get the divs to move
// 
// player progresses based on said variable


const p1 = document.getElementById('player1') ; ///Ask if I am selecting these 2 correctly 
const p2 = document.getElementById('player2') ; 

const startSpace = document.getElementById('sp0')
startSpace.append(p1)



console.log("this is p2 or player2", p2)
console.log("this is p1 or player1",p1)



function diceRoll(){  /// roles the dice so players can progress //attach to roll the dice button
    return Math.floor(Math.random() * 6) + 1 ;
}
let currentPostion = 0; // position of p1
//let position2 = 0;  // position of p2
function movePlayer(player){
    let rollDice = diceRoll();
    currentPostion += rollDice;
    if(currentPostion >= board.length){
        currentPostion -= board.length;
    }
    let current = gameBoard[currentPostion]    ///this function rolls the dice and moves players that is selected
current.append(player)
} //However right now it only moves p1 as listed I want to make this function able to move whatever piece it is attached to

movePlayer(p) /// if you put p1 or p2 into this function it will move the players to a random block based on the dice role


// init initialize an empty game and init runs one time whe the dice rolls
// then the init function will be called again from the the play again / runit back button
function init() {
}

// renders the game board
function renderBoard(){
// loop over array that reperesents the game board                            
// change the background of the slot to the player image to simulate movement
    gameBoardArr.forEach((colArr, sptIdx) => {
  //      console.log("sp"+sptIdx) //this is the index or place that is in
 //       console.log(colArr) // this is the value inside the array

        //determine the Id of the element
      //  const cellId = `sp${sptIdx}${" "}//${colArr}`  //now we use this ID to select specific DIV's and make something happen to them and store values
        // const cellId = `sp${sptIdx}`
        // console.log(cellId)                                           //then use render function to make specific changes on the DOM
        
        // const CellEl = document.getElementById(cellId)
        // console.log('CellEL', CellEl)

        // CellEl.style.backgroundColor=[]
})
}

// p1.forEach((player1)=> {
//     player1.addEventListener()
// })
// chnge intitial vis of the runItBack button

// render controls --> changes the visibility of the run it back function

// render message  --> will display whose turn it is

// render --> calls all of our render based functions at once

// getWinner --> checks to see if we have a winner / if player lands on final spot


//EventListeners
// use rollDice to start game remember 5 or 3 to start
// click roll dice to roll dice and advance piece
// lucky spot consequence
// trap spot consequence 
// restart / run it back button
// player landing on same spot capture or re-roll option
function renderControls(){


    
}







function render(){

}

//              Game Logic      ///
// -StarGame button starts the game
// - each player is allowed to rolldice until one of them rolls a 5 or 3
// -whcihever player rolls a 5 or 3 will get to roll again but this time to advance 
// -depending what # a  player rolls determines the # of spots they get to advance
// -if a player lands on the trapspot they will have to start over fromm the starting spot
// - if a player lands on lucky spot they get another turn, rolling again 
// - if players happen to land on the same spot whichever player landed there second gets to decide whether the other player
// starts over or if they get to roll again
// -which ever player makes it to final square is deemed winner 

