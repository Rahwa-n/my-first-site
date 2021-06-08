var express = require('express');
var router = express.Router();
var router = express.Router();
var mongoose = require('mongoose');

//imort the module and mongoose/june-db is the database
var mongoDB = 'mongodb://127.0.0.1/june_db_07';
//set up default db connection
mongoose.connect(mongoDB,{useNewUrlParser:true, useUnifiedTopology: true});

//get teh default connection/will give you the active connection back to the db
var db = mongoose.connection;

//to give you error of event/ if the connecton of the db trow message in the console
db.on('error', console.error.bind(console, 'MongoDB connection error'));

//class mongoose to create object and access the functionality
var Schema = mongoose.Schema;

const breakFast = new Schema({
  egg: {
    type: Number,
    min: [6,'Too few eggs'],
    max:12
  },
  salad:{
    type:Number,
    required:[true,'Salad is healthy']
  }
});
const breakFastModel = db.model('BreakFast',breakFast);
/* GET home page. */
router.get('/', function(req, res, next) {
  const myData = new breakFastModel({
    egg:6
  });

  //validating error
  let error = myData.validateSync();
  console.log(error);
  res.render('index', { title: 'Express' });
});

module.exports = router;
