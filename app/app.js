const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Sylvie'
  });
});

app.listen(3000);
