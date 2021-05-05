/**
 * Create a new index55.js file
Copy and paste the code from exercise 52
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
 */
var firstNumber = 10;
var secondNumber = 25;

// if(firstNumber > secondNumber){
//     console.log("Number " + firstNumber + " is bigger than " + secondNumber);//Number 10 is bigger than 5
// }else {
//     console.log("Number " + secondNumber + " is bigger than " + firstNumber);//Number 25 is bigger than 10
// }


//Ternary operator (only if/else)
var numberBig = (firstNumber >  secondNumber)?firstNumber:secondNumber;
var numberSmall = (firstNumber >  secondNumber)?secondNumber:firstNumber;
console.log("Number " + numberBig + " is bigger than " + numberSmall);
//Number 25 is bigger than 10