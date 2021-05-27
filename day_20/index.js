const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'pug');
app.use(express.static('public'));

const superheroes = [
  { id: 1, name: 'SPIDER-MAN', image: 'spiderman.jpg' },
  { id: 2, name: 'CAPTAIN MARVEL', image: 'captainmarvel.jpg' },
  { id: 3, name: 'HULK', image: 'hulk.jpg' },
  { id: 4, name: 'THOR', image: 'thor.jpg' },
  { id: 5, name: 'IRON MAN', image: 'ironman.jpg' },
  { id: 6, name: 'DAREDEVIL', image: 'daredevil.jpg' },
  { id: 7, name: 'BLACK WIDOW', image: 'blackwidow.jpg' },
  { id: 8, name: 'CAPTAIN AMERICA', image: 'captanamerica.jpg' },
  { id: 9, name: 'WOLVERINE', image: 'wolverine.jpg' },
];

app.get('/', function(req,res){  
  res.render('index',{ superheroes: superheroes });
});

app.get('/superheros/', (req, res) => {
  res.render('superhero', { superheroes: superheroes });
});

// this is for product looping to display in the page
app.get('/superheroes/:id', function(req,res){
  const selectedId = req.params.id;
  let selectedSuperHero = superheroes.filter(superhero => {
    return superhero.id == selectedId;
    //return superhero.id === +selectedId;

  });

  selectedSuperHero = selectedSuperHero[0];
  res.render('superhero', {superhero:selectedSuperHero});
  });
  app.post('/superheroes', urlEncodedParser, function(req, res){
    const newId = superheroes[superheroes.length-1].id + 1 ;
    const newSuperHero = {
      id:newId,
      name: req.body.superhero
    }
    superheroes.push(newSuperHero);
    res.redirect('/');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});