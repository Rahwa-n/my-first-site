//not advisable to do it function in to a function
//function within function will throw an error
function print(){
    console.log("hello");
    function greet(){
        console.log("World");
    }
    greet();
}
greet();// will throw an error //greet is not defined





