// Create the express router to handle our products requests
var express = require('express');
var router = express.Router();

//Get request /products - list all products
//Get: /products/id(because to select specific product becaue it is unique) - detail of a product by Id
//post /products - create a new product
// put /products/id - update the product by Id eg :/product/1(id of the product is 1)
//dlete /products/id - delte the product by Id



router.get('/', function(req, res) {
  res.send('On this call we show a list of products');
});
router.post('/', function(req, res) {
  res.send('On this call we create a product');
});
router.put('/:id', function(req, res) {
  res.send('On this call we update a product');
});
router.delete('/:id', function(req, res) {
  res.send('On this call we delete a product');
});
module.exports = router;