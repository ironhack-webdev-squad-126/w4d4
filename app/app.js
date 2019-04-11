const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Sylvie',
    bool: Math.round(Math.random())
  });
});

app.get('/games', (req, res) => {
  const paramObject = {
    gamesList: ['Counter-Strike', 'BF3', 'Sims', 'Street Fighter'].map(el =>
      el.toUpperCase()
    ),
    consolesObj: {
      Sony: 'PS4',
      Nintendo: 'Switch',
      Microsoft: 'Xbox One'
    },
    country: {
      name: 'Japan'
    }
  };
  res.render('games', paramObject);
});

app.listen(3000);
