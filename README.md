# Project-1-Race-Me


Project 1 Game Race Me 




/// /Summary Of Game////

This game will be a much shorter and simpiler version of the game Parchisi. It will be a browser 2 player game, the winning objective would be being able to reach the final square. Upone the start a function similar to a coin flip this funciton would start the game and deterimne who goes first. After the coin flip a diceRoll function would determine how many spaces the first player gets to advance. After wards the same dice roll function would get to determine how many spaces the 2nd player gets to advance. Whichever player reaches the final spot is determined the winner 

/// Hypothetical features /////


- Players will get to kill each other, so a function would be needed to simulate a kill. Also a conditional function that simulates the player that was killed having to start over after death. A death is executed by one player being at a spot and if the other player arrives at the same spot after that would be a kill

- Reward for a kill: would a player get rewarded after killing another player ?

- A death spot (maybe spot # 7) that if either player were step on said spot it would be an automatic death and would have to start over

- Want balloons or confetti to show up after a winner is declared


///// Diagram ////

https://lucid.app/lucidchart/de6d4b90-fc0e-40e2-8ab9-f546dc6513c7/edit?view_items=mUHRQrmXL8jR&invitationId=inv_4a75d79b-5d6f-4c29-8429-a0328431f3ca
![P1-Img](https://github.com/F2easy/Project-1-Race-Me/assets/101888578/fd3b10b6-ba7b-4092-84a4-ebd7899a59ae)


////Functions / Features /////


- coinFlip() --> would kick off the game and determine which player gets to go first if result is p1 then p1 would be first to go

- diceRoll() --> would determine how many spots a player would get to advance most likely 1-3

-  ** playerKill() --> if a player advances to a spot where another player is already present the player that arrived first would be killed and have to start from begginging (might affect the coinFlip Function)

-  ** deathSpot() --> would have kill a player if landed on this spot most likely would be spot # 7 and player would have to start over

-  reRun() --> this would start the game over after a winner is declared

///// Pseudo Code //////

Press Start button so the game starts
2 players are present P1 & P2
Coin Flip function determines which player gets to go first
After the turn is declared the dice roll function is ran for the player who won the dice roll
Dice is rolled player progresses 
Next player gets to dice roll and progress 
Players will continue progress until ( 1) winning spot has been reached, *2) 1 player has been killed and is forced to start over *3) one or both of the players have reached the death spot and has to start over )
Once one player reaches the final and winning spot. 
Player is declared winner and the play again button will pop up



//// Concerns /////

- What will happen if the dice is rolled when a player is close to the finish, but the numbered roll is over the amount needed to win (roll will not count ?)

- (Will the kills and the death spot be the same function ?)

- How will I get the pieces to move forward/backwards on the HTML/CSS ??

- How will I get all 12 spaces to fit on the web page visibility (FlexBot ?)
