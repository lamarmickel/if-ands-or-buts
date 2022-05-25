const prompt = require('prompt-sync')({sigint: true});

let Player1  = (prompt("Player 1, enter 'rock', 'paper', or 'scissor's:  " ));


let Player2  = (prompt("Player 2, enter 'rock', 'paper', or 'scissor's:  " ));


if ((Player1 === 'rock' && Player2 ==='scissors') || (Player1 ==='scissors' && Player2 ==='paper') || (Player1 ===
'paper' && Player2 === 'rock' ))
 
{console. log ("Player 1 wins!") ;} 

else if ((Player2 === 'rock' && Player1 === 'scissors') || (Player2 === 'scissors' && Player1 === 'paper') ||
(Player2 === 'paper' && Player1 === 'rock')) 

{console. log("Player 2 wins!")}

else if ((Player1 ==='rock' && Player2 ==='rock') || (Player1 ==='paper' && Player2 ==='paper') || (Player1 === 'scissors' && Player2 === 'scissors')) 

{console. log ("Draw!")}



