/*Exercise 39
Create a new index39.js file
Define a firstName variable and assign your name as it's value
Define a lastName variable and assign your last name as it's value
Show the following output:
My first name is %firstName% and it is %nameCharacters% characters long
My last name is %lastName% and it is %lastNameCharacters% characters long
The character difference between my first name and last name is %charsDiff%
My first name is longer than my last name: true or false
*/
var firstName = 'Rahwa';
var lastName = 'Netsereab';
var nameCharacter = firstName.length, lastNameCharacters = lastName.length;
var charsDiff = nameCharacter - lastNameCharacters;

console.log("My first name is " + firstName + " and it is " + nameCharacter + " characters long");
console.log("My last name is " + lastName + " and it is " + lastNameCharacters + " characters long");
console.log("The character difference between my first name and last name is " + charsDiff);
console.log("My first  name is longer thatn mylast name: " +(nameCharacter > lastNameCharacters));

//output
/**
 * My first name is Rahwa and it is 5 characters long    
My last name is Netsereab and it is 9 characters long 
The character difference between my first name and last name is -4
My first  name is longer thatn mylast name: false  
 */