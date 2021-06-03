const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const app = express();
const port = 3003;
//path to display images from public folder
const path = require("path");
const dburl = "mongodb://localhost:27017"
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false});


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// const superheroes = [
//   { id: 1, name: 'SPIDER-MAN', image: 'spiderman.jpg', },
//   { id: 2, name: 'CAPTAIN MARVEL', image: 'captainmarvel.jpg' },
//   { id: 3, name: 'HULK', image: 'hulk.jpg' },
//   { id: 4, name: 'THOR', image: 'thor.jpg' },
//   { id: 5, name: 'IRON MAN', image: 'ironman.jpg' },
//   { id: 6, name: 'DAREDEVIL', image: 'daredevil.jpg' },
//   { id: 7, name: 'BLACK WIDOW', image: 'blackwidow.jpg' },
//   { id: 8, name: 'CAPTAIN AMERICA', image: 'captanamerica.jpg' },
//   { id: 9, name: 'WOLVERINE', image: 'wolverine.jpg' },
// ];

app.get('/', function(req,res){
  //connection to the database
  mongoClient.connect(dburl,function(err,client){
    const myDataBase = client.db('comics');
    const collection = myDataBase.collection('superheroes');

    collection.find({}).toArray((error,documents)=>{
      //console.log(documents);
      //after you run the data close the database
      client.close();
      //here if the same to fetch you can use like is
      //res.render('index',{documents});
      //if it is different one using this is a proper way
      res.render('index',{documents:documents});
    });
  });
});

// this is for product looping to display in the page
app.get('/superheroes/:id', function(req, res){
  const selectedId = req.params.id;
  //connectih=ng to the database
  mongoClient.connect(dburl,function(err,client){
    const myDataBase = client.db('comics');
    const collection = myDataBase.collection('superheroes');
    const filter = {_id: ObjectID(selectedId)}; 
    collection.find(filter).toArray(function(error,documents){
      var selectedSuperHero = documents[0];
      client.close();
      res.render('superhero',{superhero:selectedSuperHero});
    });
  });
});
//edit superhero calling the server and connect database 
app.get('/edit/:id', function(req,res){
  const selectedId = req.params.id;
  mongoClient.connect(dburl,function(err,client){
    const myDataBase = client.db('comics');
    const collection = myDataBase.collection('superheroes');
    const filter = {_id: ObjectID(selectedId)}; 
    collection.find(filter).toArray(function(error,documents){
      var selectedSuperHero = documents[0];
      client.close();
      res.render('edit',{superhero:selectedSuperHero});
    });
  });
});

//route for detail page superhero, to display the detail of the superhero/ product
//after edited or updated
app.post('/superheroes', urlEncodedParser, function(req, res){
  const newSuperHero = {
    name: req.body.superhero,
    description: req.body.description,
    weather: req.body.weather,
    color: req.body.color

  }
  console.log(req.body.weather);
  console.log(req.body.color);
  mongoClient.connect(dburl,function(err,client){
    const myDataBase = client.db('comics');
    const collection = myDataBase.collection('superheroes');
    collection.insertOne(newSuperHero, function(err,result){
      client.close();
      res.redirect('/');
    });
  });
});

//post update superhero
app.post('/edit', urlEncodedParser, function(req, res){
  const selectedId = req.body._id;
  const filter = {_id: ObjectID(selectedId)};
  const set = {$set: {name: req.body.superhero, description: req.body.description}};
  mongoClient.connect(dburl,function(err,client){       
    const myDataBase = client.db('comics');
    const myCollection = myDataBase.collection('superheroes');  
    myCollection.updateOne(filter,set,(err,result)=>{
      client.close();
      res.redirect('/edit/' + selectedId);
    });
  });
});

//delete route redirect to index page
app.get('/delete/:id',function(req,res){
  const selectedId = req.params.id; 
  mongoClient.connect(dburl,function(err,client){       
    const myDataBase = client.db('comics');
    const myCollection = myDataBase.collection('superheroes');    
    const filter = {_id: ObjectID(selectedId)};
    myCollection.deleteOne(filter, function(err,result){
      client.close();
      res.redirect('/');
    });    
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});