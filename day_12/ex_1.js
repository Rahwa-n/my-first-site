//slice operator
const text = 'I like JavaScript!!';
const result = text.slice(4, 15);

console.log(result); //output is ke JavaScri

const textSub = 'I love JavaScript!!';
const resultSub = textSub.substr(7, 10);

console.log(resultSub); //output is JavaScript

//an array of type string
let friends = 'nati, mati, pepe, raul, juan, marta, agus, laila';
let frindsArray = friends.split(',');
console.log(frindsArray);
/*output 
[
    'nati',  ' mati',
    ' pepe', ' raul',
    ' juan', ' marta',
    ' agus', ' laila'
  ]
 */
