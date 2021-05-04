function addition(no1 , no2){

    let numTotal = no1 + no2;
    no1++;
    console.log("numTotal " + numTotal);
    return numTotal;
}

let number1 = 5; number2 = 9;
let total = 0;

total = addition(number1, number2);
console.log(total);

total = addition(3,8);
console.log(total);