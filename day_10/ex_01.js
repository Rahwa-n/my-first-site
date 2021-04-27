var total;
var number1, number2;
number1 = 5;
number2 = 11;
total = number1+ + number2;
total = (number1 + 10) * 2;// it will give the same result as the down one
console.log("Total :" + total);
total = number1 + 10 * 2; // it will give the same as the upper one
total = total +10;//this is also add 10 on top of the total amoun by the time of execution
console.log("Total :" + total);

//modulus means a remender of a division (% modulus operator)
var modu = number2 % number1;//11 % 5 = 1
console.log("Modu: " + modu);

//increment , decrement ++, --
//it increase or decrese the value by 1
var number3 = 0, number4 =0;
number3++;
console.log("number3: " + number3);//1
++number3;//it will increment the value
console.log("number3: " + number3);//2

number4--;
console.log("number4: " + number4);
--number4;//it will decrement the value
console.log("number4: " + number4);

var number5 = 0 , number6 = 0, newValuePost = 0, newValuePre = 0;

newValuePost = number5++;// newValuePost = 0 , number5 = 1(postfix)
newValuePre = ++number6; // newValurePre = 1, number6 = 1 (prefix)

console.log("newValuePost: " + newValuePost);
console.log("newValuePre: " + newValuePre);

//total = total +10; short ways is the down one
total += 10;
total -= 10;
total *= 10;
total /= 10;


