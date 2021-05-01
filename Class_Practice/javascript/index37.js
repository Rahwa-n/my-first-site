/*Exercise 37
Create a new index37.js file
Define an average variable and assign the following value: 6
Define a studentAverage variable and assign the following value: 4
Show the following output:
This student has a greater or equal average required to pass: true/false
This student is missing %points% to pass
*/
var average = 6;
var studentAverage = 4;
console.log("This student has a greate or equal average required to pass: " + (studentAverage >= average));
console.log("This student is missing " + (average - studentAverage) + " to pass");

//output
/**
 * This student has a greate or equal average required to pass: false
This student is missing 2 to pass
 */