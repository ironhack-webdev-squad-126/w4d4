const mongoose = require('mongoose');

// const root = 'mongodb://';
// const host = 'localhost/';
// const dbName = 'exampleDB';
// const connectionUrl = `${root}${host}${dbName}`;
// mongoose.connect(connectionUrl)

mongoose.connect('mongodb://localhost/exampleDB', {
  useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
  console.log('connected');
});
mongoose.connection.on('error', () => {
  console.error('error');
});
mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
});

const Sheep = mongoose.model();

const shaun = new Sheep({ name: 'Gromit' });
shaun.save(() => {
  console.log();
  bla.save(() => {
    cdf.save(() => {});
  });
});

['a', 'b', 'c'].forEach(el => {
  Sheep({ name: el }).save();
});

Sheep.find({ name: 'Gronit' })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
