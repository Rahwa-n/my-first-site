let age = 40;
let residence = 'SouthPoint';

let eligible = (age >= 40 || residence == 'DownTown');
console.log(eligible); //true

eligible = (age >= 50 || residence == 'DownTown');
console.log(eligible);//false

eligible = (age >= 50 && residence == 'DownTown');
console.log(eligible);//false

eligible = (age >= 40 && residence == 'SouthPoint');
console.log(eligible); //true

eligible = (age >= 40 && residence == 'SouthPoint');
console.log(eligible);//false

console.log(!true); //false

let isNumber = true;
isNumber = !isNumber;
console.log(isNumber); //false

//\n - newline. \t tab, ' , " "
console.log("Hi Everyone, \n It's \"Monday\" today. \t It's first day fo the week");
//the outcome will look like this
//Hi Everyone,
// It's Monday today.      It's first day fo the week
