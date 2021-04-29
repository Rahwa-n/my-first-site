/*Exercise 28
Create a new index28.js file
Define a number variabe and assign the following value: 9
Using the number variable show the multiplication table from 1 to 10
Example: 9 times 1 equals 9
Use string concatenation for each output and console.log()
*/

var number = 9;
for (let i = 1; i <= 10; i++) {
    //multiply i with a number
    let result = number * i;
    //display the result
    console.log(`${number} * ${i} = ${result}`);
}


//outcome
/*9 * 1 = 9
9 * 2 = 18
9 * 3 = 27
9 * 4 = 36
9 * 5 = 45
9 * 6 = 54
9 * 7 = 63
9 * 8 = 72
9 * 9 = 81
9 * 10 = 90
*/