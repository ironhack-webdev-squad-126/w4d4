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

const Sheep = mongoose.model('Sheep', {
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 10,
    lowercase: true,
    trim: true,
    match: /regex/
  },
  age: {
    type: Number,
    min: 18,
    max: 99,
    validate: {
      validator: num => num % 2 === 0,
      message: 'Your age must be an even number'
    }
  },
  birthdate: {
    type: Date,
    default: new Date()
  },
  shaved: {
    type: Boolean
  },
  friends: {
    type: [String] // ['Gromit', 'Dolly']
  }
});

const shaun = new Sheep({ name: 'Gromit' });
shaun.save();

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
