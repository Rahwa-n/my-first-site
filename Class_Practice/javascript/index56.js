/**
 * Create a new index56.js file
Copy and paste the code from exercise 53
Refactor the code so it match the new requirements:*
Replace if/ese statement for a conditional ternary operator
 */
var number = 18;
// if(number%1 == 0) {
//     console.log(number + " is an even number");
// }else {
//     console.log(number + " is an odd number");
// }


var numberBig = (number%1 == 0)?'even':'odd';
console.log(number + " is an " + numberBig + " number");
//18 is an even number