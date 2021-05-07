//hosting is if a variable not declare befor the execution or before and if after it it will be undfined.
console.log(myName);//myName is not defined
var myName = 'Rahwa';
console.log(myName);
/**
 * undefined
    Rahwa
 */
//JavaScript, Hoisting is the default behavior of moving all the declarations at the top 
//of the scope before code execution. Basically, it gives us an advantage that no matter 
//where functions and variables are declared, they are moved to the top of their scope 
//regardless of whether their scope is global or local.

//topic is Scope
    //scope of a variable
for(let i = 0; i<5; i++){
    //declareing in var it can be accessed from accros the file which is it is global
    //use let to define the scope but it is not going to be global only local
    var city = "Winnipeg";//when you defined a variabl as a variable it will be global
    city = "Asmara";
    let country = "Canada";
        var person = {
            myName: 'Rahwa',
            age: 30
        };
}
console.log(person);//{ myName: 'Rahwa', age: 30 }

function printCity()// adding a paramete here it will help to access it
{
    let country = "Eritrea";//Eritrea //once we add here it will print the country and the out put will no longer not defined
    console.log(city);//Winnipeg
    console.log(country);//country is not defined
}

printCity();
console.log(city);//Asmara

