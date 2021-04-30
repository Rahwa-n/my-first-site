const numberAsAString = '3';
console.log(typeof numberAsAString)//string
/* ----------------------------------------- */
//parseInt it will covert a string in to an integer
const number = parseInt(numberAsAString);
const newNumber = parseInt('a');
console.log(number); //3
console.log(typeof number) //number
/* ----------------------------------------- */
var total = number + 5;
var strTotal = numberAsAString + 8;
console.log(`Total : ${total}`); // 8
console.log(`strTotal : ${strTotal}`); //38
//output is Total : 8 strTotal : 35 the numbers are not adding just
//two numbers are sit side by side
//the numberAsAString value 3 taken and put side of it 8
console.log(`newNumber : ${newNumber}`); //NAN

//ParseFloat
const piAsText = '3.14';
const pi = parseFloat(piAsText);
console.log(pi); // output 3.14