const text = 'Welcome to JavaScript!!';
const characterCount = text.length;

console.log(characterCount); //23
console.log(text.length);

let fname = 'Rahwa';
fname = fname.toUpperCase();// this value can be re-assigne(override) to other but if you put it in cosole log can not change.
console.log(fname);

//it can be used like this also
var myName = 'RAHWA NETSERAB';
var newVal = 0;
newVal = myName.toLowerCase();
console.log(newVal);

//concatnate
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2, '!'));
//expected output: Hello World!

console.log(str2.concat(', ', str1));
//expected output: "World, Hello"

console.log(str1.concat(str2));
//expected output: "HelloWorld"

//char at
var position = str1.charAt(0);
console.log(position);

//to get the last caharcter of str1
console.log(str1.charAt(str1.length -1));
console.log(str1.charAt(str1.length));