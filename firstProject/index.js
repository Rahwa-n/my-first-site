//standard steps using express to provide web server in node js

// const priceGen = require('./math');
// console.log(priceGen(20));
// var cal = function(){

// }

// //both the upper one and this one are same/and better to use this one mean the second one
// var calculator = () =>({

// });

//standard steps using express to provide web server in node js
const express = require('express');
const app = express();
//write the route first and slash(/) represent the default route
app.get('/', function(request,response){
    //useful to do someting whten you need response
    response.send("Hello, I received your request");
});

app.post('/', function(request,response){
    //useful to do someting whten you need response
    response.send("Hello, Your sent me a post request");
});

app.put('/', function(request,response){
    //useful to do someting whten you need response
    response.send("Hello, Your sent me a put request");
});

app.delete('/', function(request,response){
    //useful to do someting whten you need response
    response.send("Hello, I received a delete request");
});

//route for a product
app.get('/products', function(request,response){
    //useful to do someting whten you need response
    response.send("Hello, I received your product request");
});

app.post('/products', function(request,response){
    //useful to do someting whten you need response
    //response.send("Hello, Your sent me a product post request");
    response.json({productName: 'storage', category: 'outdoor storage'});
});

app.put('/products', function(request,response){
    //useful to do someting whten you need response
    response.send("Hello, Your sent me a product put request");
    
});

app.delete('/products', function(request,response){
    //useful to do someting whten you need response
    response.send("Hello, I received a product delete request");
});

//to accept http port request to connect to devices
app.listen(3000,function(){
    console.log("App listening at port 3000");
});






