/*Exercise 44
Create a new index44.js file
Define a text variable and assign the following value: HELLO
Define a result variable
Get each char from the text variable and revert the text assigning it to the result variable
At the end you should be able to show the following text: OLLEH
Once you reverted the text, transform it to lowercase
Show the final output: the final result is: olleh
It kind of sound spanish, right?.. ole!!! (lol)
*/

var text = 'HELLO';
var result = '';

for( var i = 0; i < text.length; i++)
{
    result = text[i] + result;
};
console.log(result);//OLLEH

result = result.toLowerCase();
console.log("the final resultis: " + result);//the final resultis: olleh








