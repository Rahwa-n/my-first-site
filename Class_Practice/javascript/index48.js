/**
 * Create a new index48.js file
Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
Declare a result value and assign the result of adding pi and answerToLife values
Show the result variable value and name as output (use console.log(variable name, variable value))
Show the following output: 45.14 is the result of adding pi and answerToLife
Concatenate the strings and transform 45.14 (result value) from number to string using toString method
 */
var message = "3.14 it's a great number but 42 it's the answer to life";
var pi = parseFloat(message.substr(0,4));
var answerToLife = parseInt(message.substr(28,31));
var result = pi + answerToLife;
console.log('result ' + result);
console.log('answerToLife ' + answerToLife);
console.log('pi ' + pi);
/**
 * result 45.14
answerToLife 42
pi 3.14
 */
result = result.toString();
console.log(result + ' is the result of adding pi and ' + answerToLife);
//45.14 is the result of adding pi and 42












