/*Exercise 35
Create a new index35.js file
Define the clientId variable and assign the following value: 143245
Define the inputClientId variable and assign the following value: '143245'
Show as output if the input client id is the same as the client id value (use comparison by value)
Example: The input client id is correct by value? true or false
Show as output if the input client id is the same as the client id value (use comparison by value & type)
Example: The input client id is correct by value and type? true or false
*/

var clientId = 143245;
var inputClientId = '143245';
var comparisonByValue = clientId == inputClientId;
var comparisonValueAndType = clientId === inputClientId;
console.log("The input client id is correct by value? " + comparisonByValue); //The input client id is correct by value? true
console.log("The input client id is correct by value and type? " + comparisonValueAndType); //The input client id is correct by value and type? false