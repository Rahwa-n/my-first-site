//objects methods
/**
 * The JavaScript this keyword refers to the object it belongs to. 
It has different values depending on where it is used: In a method, 
this refers to the owner object. Alone, this refers to the global 
object.
 */
var person = {
    myName: "Rahwa",
    age: 29,
    greet: function(){
        console.log("Hello! " + this.myName);//Hello! Rahwa
    },
    birthday: function(){
        this.age++;
    }
}

console.log(person);//{ myName: 'Rahwa', age: 29 }
console.log(person.myName);//Rahwa //output individually
console.log(person.age);//29
console.log(person.city);//undefined// becuase it wasn declared
/*person.city = 'Winnipeg';
console.log(person.city);
this is not recomended because it might be lose track of the object but it will give the output
*/
person.greet();//Hello
person.birthday();
console.log(person.age);//30

var properties = Object.keys(person);
console.log(properties);//[ 'myName', 'age', 'greet', 'birthday' ]

var firstProp = properties[0];
console.log(person[firstProp]);//Rahwa
//console.log(person[properties[0]]);
// function print(yourName)
// {
//     console.log("Hello! " + yourName);//Hello! Awa
// }
// // print("Awa")
// print(person.myName);//Hello! Rahwa





