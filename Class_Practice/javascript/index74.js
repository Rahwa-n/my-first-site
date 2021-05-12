/**
 * /*Exercise 74
Create a new index74.js file
Show the following output using while:
*
***
*****
*******
*********
***********
*************
*/
 
var i=1;
stars = "";
while(i<14){
    stars = stars + '*';
    if(i%2!==0){
        console.log(stars);
    }    
    i++;
}
/**
*
***
*****
*******
*********
***********
*************
 */