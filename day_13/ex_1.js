//while loop not execute if the condtion is met/match
var count = 8;
while(count < 8){
    console.log("Inside loop");//it is not going to execute becaue the var is and the condition is less than 8.
}

//it will check the condition in do then it goes to while loop
// at list it willexecute once
do{
    console.log("Inside do-while loop");
}while(count < 8)
   
//for("initialization" ; "condition" ; "increment/decrement statement")
// for(let i = 1 , j = 1 ;i < 10 && j <= 10 ; i++ j++)
for(let i = 10; i > 0 ; i--)
{
    console.log(i);
}

//break this will print or execute only the first condition and then it will break
for(let i = 10; i > 0 ; i--)
{
    console.log(i);
    break;
}










