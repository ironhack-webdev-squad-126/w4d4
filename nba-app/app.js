const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/players', (req, res) => {
  res.render('players');
});

app.get('/teams', (req, res) => {
  res.render('teams');
});

app.listen(3000);
