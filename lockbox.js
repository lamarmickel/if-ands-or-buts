const prompt = require('prompt-sync')({sigint: true});

 let entry = prompt("Please enter your passcode? ");

 let pin = "2468";
 

if(entry === pin)
{console.log(" Success! ")}

if(entry !== pin)
{console.log (" Failure ")};









