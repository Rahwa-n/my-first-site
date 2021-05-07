//arguments is an object like array of object.
function addition()
{
    console.log(arguments);//[Arguments] { '0': 3, '1': 5 }
    console.log(arguments.length);//2
    console.log(arguments[0] + arguments[1]);//8 adition of two number
    
    let total = 0;
    for(let i = 0; i< arguments.length; i++)
    {
        // total = total + arguments[i];
        total += arguments[i];
    }
    console.log(total);
}

addition(3,5);//8
addition(4,7,1,2,3,4);//21

//recursion
/**
 * A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

Once the condition is met, the function stops calling itself. This is called a base condition.

To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.
function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}

recurse();
 */
