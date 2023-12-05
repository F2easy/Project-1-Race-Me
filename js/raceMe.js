






/*-----Identify and initilize our state Variable---*/


///state variables
const player1 = {
    canPlay: false,
    currentPostion: 0,
    element: document.getElementById('player1') 
}
const player2 = {
    canPlay: false,
    currentPostion: 0,
    element: document.getElementById('player2') 

}

let turn = 1 // will always be 1 for p1 or -1 for p2 

let winner = 1 || 2 || null// will either be p1 or p2 if neither
const board = ['sp0','sp1','sp2','sp3','sp4','sp5','sp6','sp7','sp8', 'sp9','sp10','sp11' ];
// const roll = Math.floor(Math.random() * 6) + 1
gameStarted = false;

///
// cached DOM elements
/// grab our HTML elements and save them to variables to use later
const messageEl = document.querySelector('h2')
const turnEl = document.querySelector('h3')
const gameBoard = document.getElementsByClassName("sp"); //grabbing the entire board
const trapSpot = document.getElementById('trap'); // grabbing the trap spot
const luckySpot = document.getElementById('lucky'); // grabbing the lucky spot
const restartButton = document.getElementById('runItBack'); //grabbing run it back / restart button
const startButton = document.getElementById('start').addEventListener('click',startGame) // grabbing start button
const resultDisplay = document.getElementById("display") ;

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


//code the start button
/// Event Listeners ///
// grabbing the roll-dice button
const diceDisplay = document.getElementById("rollDice");
// click event listener
diceDisplay.addEventListener("click",function(){
    diceRoll()
    // changeCurrentPlayer()
    
}) ;  /// instead of dice roll 
// p1.addEventListener("click",palyerClick);
// p2.addEventListener("click",palyerClick);
//startGame.addEventListener('click', start()) ///?



//const startSpace = document.getElementById('sp0')
//startSpace.append(p1)



// console.log("this is p2 or player2", p2)
// console.log("this is p1 or player1",p1)



function init(){

    turn = 1 
    winner = 0 



    render()
}



// renders the game board
// function renderBoard(){
// // loop over array that reperesents the game board                            
// // change the background of the slot to the player image to simulate movement

// }
///functions
let currentPlayer = player1


function startGame() {
    if(!gameStarted){
        gameStarted = true;
        turn = 1
        console.log("player "+ turn + " turn")
        console.log(gameStarted)
    }
}


function changeCurrentPlayer(){
    turn = turn === 1 ? 2 : 1;
    console.log(turn)
    if(turn === 1){
        currentPlayer = player1
    } else{
        currentPlayer = player2
    }
}

let roll 
function diceRoll(){ 
    console.log("player " + turn + " turn")
         /// roles the dice so players can progress //attach to roll the dice button
          // checking whether resulr is 5 or 3 so we can start game 
    if (gameStarted === true){
        roll = Math.floor(Math.random() * 6) + 1
        // displays result in results element
        //display the dice results in the display element HTML
        console.log(roll)
        resultDisplay.textContent = ("Result of Roll: " + roll);
        if(roll === 5 || roll === 3){
            if(currentPlayer.canPlay==false){
                currentPlayer.canPlay = true
                return
            } 
            movePlayer(roll)
            console.log("is roll always 5 or 3 " + roll )
            gameStarted = true;
        } else { 

                console.log(currentPlayer + "rolled " + roll)
        
        } 
    // not going to execute unless gameStarte == false
    } else {
        // checks if player landed in trapspot and adjust player piece then prints message
        if (checkTrap()){
            resultDisplay.textContent="Yikes you landed in the Trap Spot ";
        } else{
            //checks if player landed in luckspot and adjust player piece then prints message
            if (checkLuck()){
                resultDisplay.textContent("Nice You landed in the Lucky Spot ")
            }
        } 
        changeCurrentPlayer()
    }
}
    




function movePlayer(roll){
    // let currentPosition = board.indexOf(`sp${currentPlayer.position}`);
    //console.log(currentPosition)
    let newPosition = currentPlayer.currentPostion + roll;
    if(newPosition >= board.length){
        newPosition -= board.length;
    }
    let current = gameBoard[newPosition]    ///this function rolls the dice and moves players that is selected
    current.append(currentPlayer.element);              /// working backwards from the array starting at 0
} //However right now it only moves p1 as listed I want to make this function able to move whatever piece it is attached to




// getWinner --> checks to see if we have a winner / if player lands on final spot
function renderMessage() {
    if (winner == 1){
        messageEl.innerText = " Tiger Wins the Race !!" ;
    }else if (winner === 2) {
        messageEl.innerText = " Bear Wins the Race !!" ;
    }else if (winner === null) 
        messageEl.innerText = " Who is going to win ? !!"  ;
}
if (turn === 1){
    turnEl.innerText = "Tiger's Turn" ;
    }else if (turn === 2){
        turnEl.innerText = "Bear's Turn" ;
    }else {
        turnEl.innerText = "Start Game !!" ;
}

function renderControls(){
    if (winner !== null){
        restartButton.style.visibility = 'visible';
    }else {
        restartButton.style.visibility = 'hidden'
    }
}// why isn't this working ??





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

// this function checks if player landed in trap spot and sends them back to starting spot
    


function checkTrap(player){
    if(currentPostion == 5){
        return true && currentPosition + 7
    }
}
// this function checks if player landed in lucky spot and awards them with another roll
function checkLuck(player){    
    if(currentPostion == 6 && turn != null){
        return true && currentPostion - 6  
        roll()
    }
}                         // will putting these functions in the movePlayer function simulate the whole game ??

function progress() {
    let rollDice = diceRoll();
    let newPosition = currentPostion + diceRoll
    let newSpot
    return newSpot = board[newPosition]
}

function checkWinner(){
    if(player1.currentPostion == 0) {
            winner ==  1
    }else if
        (player2.currentPosition == 0){
            winner == 2
    }
}

function render(){
    // call renderBoard
    // call renderMessage
    renderMessage()
    renderBoard()
    renderControls()
}