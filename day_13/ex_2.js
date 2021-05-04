
// for(let i = 10; i > 0 ; i--)
// {
//     console.log(i);
//     if( i === 5){// once it hit 5 the execution will stop
//         break;// it will break the immediate loop
//     }
    
// }

var count = 8;
while(count > 5)
{
    for(let i = 10; i > 0 ; i--)
    {
        console.log("i = " + i);
        if( i == 8){
            break; 
        }
    }
    count--;
    break;
}// it will execute 3 times because count declared 8 and it is printing 10,9,8
