//If-else
var number = 17;

if(number >= 65){
console.log('Senior Citizen');
}
else if(number >=18 && number < 65){
    console.log('An Adult');
}
else {
    console.log('Minor');
}

//Ternary operator (only if/else)
var total = 20;
var message = (total === 20) ?'Pass' : 'Fail';
console.log(message);