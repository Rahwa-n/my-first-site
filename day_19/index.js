const express = require('express');

const app = express();

const home = require('./home');
const products = require('./products');

app.set('view engine', 'pug');

// app.use('/', home);
// app.use('/myproducts', products );

app.get('/', function(req, res){
    res.render('index', {title: 'Hey', message:'I like to use Pug'});
});
app.listen(3000, function(){
    console.log('I am listening');
});






