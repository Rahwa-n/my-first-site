/*Exercise 43
Create a new index43.js file
Define a text variable with the following value: game of thrones
Define 3 variables with the following names:
firstChar
secondChar
thirdChar
Assign the firstChar the first char from the text variable
Assign the secondChar the char at index 5 from the text variable
Assign the thirdChar the char at index 8 from the text variable
Define a variable with the result name and assign the result value from using concat between firstChar, secondChar and thirdChar
Transform the result variable to uppercase
Show the result value as output: the final result is: GOT
What happens when you use an invalid index number (for example, 1000)? Try it!
*/

var text="game of thrones";
var firstChar;
var secondChar;
var thirdChar;
firstChar = text.charAt(0);
secondChar = text.charAt(5);
// thirdChar = text.charAt(8);
thirdChar = text.charAt(1000);
var result = firstChar.concat(secondChar + thirdChar);
result = result.toUpperCase();

console.log("the final result is: " + result); //the final result is: GOT
// or if not the final result is: GO