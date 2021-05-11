//reading html file from Js
//window.onload = function(){
setTimeout(() => {
    let mainTitle = document.getElementById('firstTitle');
    mainTitle.style.color = "red";
    console.log(mainTitle);
}, 5000);

//query selctor will give what that muchs with what you selected  a single elemt
//query selector is used to select an element by using html element name
//to access the firt div element of the document you can select it by queryselector
var divElements = document.querySelector('div');
console.log(divElements);
console.log(divElements.attributes);// displays the attributes
console.log(divElements.getAttribute('class'));
console.log('Div element has Id ? : ' +  divElements.hasAttribute('id'));

// var hasId = divElements.hasAttribute('id');
// if(hasId === false){
//     divElements.setAttribute('id', 'firstDiv');
// }
// console.log('Div element has Id ? : ' +  divElements.hasAttribute('id'));



if(!divElements.hasAttribute('id')){
    divElements.setAttribute('id', 'firstDiv');
}
console.log('Div element has Id ? : ' +  divElements.hasAttribute('id'));

//query selector all is it will show all the div's element in the document 
var allDivElements = document.querySelectorAll('div');
console.log(allDivElements);

//attribute mean any extra added in a given tag such as in a script tag we addd src and class added inside div tag



