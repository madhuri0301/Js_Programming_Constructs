const readline = require('readline-sync'); // Pulls In All The Functions that Allows Us To Get data From User

//readline.question : this Method Is Used To Ask The Question From User
let digit = readline.question("Enter The Digit : "); 
digit = Number(digit) //Number Is A Function Used To Convert Data Type To Number

if(digit == 0)
{
    console.log("Zero");
}
else if(digit == 1)
{
    console.log("One");
}
else if(digit == 2)
{
    console.log("Two");
}
else if(digit == 3)
{
    console.log("Three");
}
else if(digit == 4)
{
    console.log("Four");
}
else if(digit == 5)
{
    console.log("Five");
}
else if(digit == 6)
{
    console.log("Six");
}
else if(digit == 7)
{
    console.log("Seven");
}
else if(digit == 8)
{
    console.log("Eight");
}
else if(digit == 9)
{
    console.log("Nine");
}




