//arrays
//filter method on arrays
var grades = [1,7,9,3,4,4,2,5,8,10,6];
var firstClass = grades.filter(function(grade){
    return grade >= 6;
});
console.log(firstClass);//[ 7, 9, 8, 10, 6 ]