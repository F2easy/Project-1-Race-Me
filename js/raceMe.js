



///functions
function diceRoll(){  /// roles the dice so players can progress //attach to roll the dice button
    let p = Math.floor(Math.random() * 6) + 1
    console.log(p)
    return p
};

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
//starting position
let postion1 = 0;
let position2 = 0; /// the number in the position can correlate to the Element Id so i can use the position to target ID and use that number for movement
// Players



//board and special board spots
///                 sp0 sp1 sp2 sp3 sp4 sp5 sp6 sp7 sp8 sp9 sp10 sp11
const gameBoardArr = [0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0  ] ///  sp0 -> start   sp6 -> luckySpot  sp7 --> Trap Spot sp11

const gameBoard = document.getElementsByClassName("sp"); //grabbing the entire board
const trapSpot = document.getElementById('trap'); // grabbing the trap spot
const luckySpot = document.getElementById('lucky'); // grabbing the lucky spot

const runItBackButton = document.querySelector('runItBack')
const startButton = document.querySelector('start')
const  rollDiceButton = document.querySelector('rollDice')


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

const p1 = document.getElementById('player1') ; ///Ask if I am selecting these 2 correctly 
const p2 = document.getElementById('player2') ; 

const startSpace = document.getElementById('sp0')
startSpace.append(p1)

console.log("this is p2 or player2", p2)
console.log("this is p1 or player1",p1)

let turn = 0
let winner = null



function init() {

let turn = 0
let winner = null

    ///            sp0 sp1 sp2 sp3 sp4 sp5 sp6 sp7 sp8 sp9 sp10 sp11
const gameBoardArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ///  sp0 -> start   sp6 -> luckySpot  sp7 --> Trap Spot sp11 --> winning spot

// Call the render Function once the the RENDER is created
}

function renderBoard(){
// loop over array that reperesents the game board                            
// change the background of the slot to the player image to simulate movement
    gameBoardArr.forEach((colArr, sptIdx) => {
  //      console.log("sp"+sptIdx) //this is the index or place that is in
 //       console.log(colArr) // this is the value inside the array

        //determine the Id of the element
      //  const cellId = `sp${sptIdx}${" "}//${colArr}`  //now we use this ID to select specific DIV's and make something happen to them and store values
        const cellId = `sp${sptIdx}`
        console.log(cellId)                                           //then use render function to make specific changes on the DOM
        
        const CellEl = document.getElementById(cellId)
        console.log('CellEL', CellEl)

        // CellEl.style.backgroundColor=[]
})
}

// p1.forEach((player1)=> {
//     player1.addEventListener()
// })

function renderControls(){
    // chnge intitial vis of the runItBack button
    // asking question if true, do this: 
    runItBackButton.style.visibility = winner ? 'visible' : 'hidden'
    
}







function render(){

}
