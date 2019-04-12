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
    // unique: true,
    required: true,
    minlength: 5,
    // maxlength: 10,
    lowercase: true,
    trim: true,
    enum: ['gromit', 'hello']
    // match: /regex/
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

// const shaun = new Sheep({ name: 'dolly' });
// shaun.save();

// ['a', 'b', 'c'].forEach(el => {
//   Sheep({ name: el }).save();
// });

// find returns an array of documents matching the query
// Sheep.find({ name: 'gromit' })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Returns the first document that matches the query
// Sheep.findOne({ name: 'gronit' })
//   .then(data => {
//     if (data) console.log('success');
//     else console.log('Sheep not found');
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Returns the only document for a given ObjectId
// Sheep.findById('5cb03d5168474c62c5a7d9a6')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Sheep.create(
//   { name: 'gromit', age: 20, shaved: true },
//   { name: 'hello', age: 30, shaved: true }
// )
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Sheep.insertMany([
//   { name: 'gromit', age: 20, shaved: true },
//   { name: 'hello', age: 30, shaved: true }
// ])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Sheep.updateMany({ age: 20 }, { shaved: false, age: 21 })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// finds the first document that matches the query, updates it with the values provided as a second parameter
// use {new: true} as options if you want the fresh data to be returned

// Sheep.findOneAndUpdate({ name: 'goodbye' }, { new: true })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// updates all the documents matching the query, with the fields and values provided in the second parameter
// use {new: true} as options if you want the fresh data to be returned

// Sheep.updateMany(
//   { name: 'goodbye' },
//   { name: 'ironhacker sheep' },
//   { new: true }
// )
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Sheep.deleteMany({ name: 'gromit' })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Sheep.findOneAndDelete({ name: 'hello' })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err);
//   });
