# Project-1-Race-Me


Project 1 Game Race Me 




/// /Summary Of Game////

This game will be a much shorter and simpiler version of the game Parchisi. It will be a browser 2 player game, the winning objective would be being able to reach the final square before the other player. Upon the start each player would have to roll either a 5 or a 3 in order to advance. After the coin flip a diceRoll function would determine how many spaces the first player gets to advance. After that the same dice roll function would get to determine how many spaces the 2nd player gets to advance. Whichever player reaches the final spot is determined the winner/ 

///Technology Used////
- HTML , Javascript, CSS

/// Hypothetical/future enhancements /////


- Players will get to kill each other, so a function would be needed to simulate a kill. Also a conditional function that simulates the player that was killed having to start over after death. A death is executed by one player being at a spot and if the other player arrives at the same spot after that would be a kill

- Reward for a kill: would a player get rewarded after killing another player ?

- A death spot (maybe spot # 7) that if either player were step on said spot it would be an automatic death and would have to start over

- Want balloons or confetti to show up after a winner is declared

 -  ** playerCapture() --> if a player advances to a spot where another player is already present the player that arrived first would be killed and have to start from begginging (might affect the coinFlip Function)


///// Diagram ////

https://lucid.app/lucidchart/de6d4b90-fc0e-40e2-8ab9-f546dc6513c7/edit?view_items=mUHRQrmXL8jR&invitationId=inv_4a75d79b-5d6f-4c29-8429-a0328431f3ca
![P1-Img](https://github.com/F2easy/Project-1-Race-Me/assets/101888578/fd3b10b6-ba7b-4092-84a4-ebd7899a59ae)


////Functions / Features /////


- coinFlip() --> would kick off the game and determine which player gets to go first if result is p1 then p1 would be first to go

- diceRoll() --> would determine how many spots a player would get to advance most likely 1-3

-  ** trapSpot() --> would have kill a player if landed on this spot most likely would be spot # 7 and player would have to start over

-  reRun() --> this would start the game over after a winner is declared

///// User Story //////

Press Start button so the game starts
- As a user I want to roll a 5 or a 3 as soon as possible so I can begin to advance
- After being granted persmission to advance by my previous role I want to roll a number but avoid the trapSpot
- I know the TrapSpot will send me back
- hopefully I can hit the lucky spot and get another roll
- If I don't roll and hit the lucky spot it is okay
- I hope to hit the end spot before my opponent and be the victor !



//// Concerns /////

- What will happen if the dice is rolled when a player is close to the finish, but the numbered roll is over the amount needed to win (roll will not count ?)

- (Will the kills and the death spot be the same function ?)

- How will I get the pieces to move forward/backwards on the HTML/CSS ??

- How will I get all 12 spaces to fit on the web page visibility (FlexBot ?)
