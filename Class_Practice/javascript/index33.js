/*Exercise 33
Create a new index33.js file
Define the userCount variable and assign the following value: 100
Increment the user count by 5
Show the following output: Users count: %userCount%
Decrement the user count by 3
Show the following output: Users count: %userCount%
We bought a new company so now we double the user count
Show the following output: Users count: %userCount%
We know that 50% of the users identify as men and the other 50% identify as women
Show the following output: Users count: %userCount%, %menCount% % & %womenCount% %
Use as many assignment operators as you can
*/

var userCount = 100;
userCount =userCount + 5;
console.log("Users Count: " + userCount); //User Count: 105

userCount = userCount - 3;
console.log("Users Count: " + userCount); //Users Count: 102

userCount = userCount * 2;
console.log("Users Count: " + userCount); //Users Count: 204

var menCount = userCount * 0.5;
var womenCount = userCount * 0.5;
console.log("Users Count: " + userCount, + menCount + "% & " + womenCount + "%");