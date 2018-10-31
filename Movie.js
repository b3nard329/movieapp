const mongoose = require('mongoose');
const db = 'mongodb://bernard22:movies123@ds045557.mlab.com:45557/b3narddata';

mongodb: mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connection error', error);
  });

//Title,Year,Genre,Actors,Plot and Poster

const schema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  genre: { type: String },
  actors: { type: String },
  plot: { type: String },
  poster: { type: String }
});

const Movie = mongoose.model('Movie', schema, 'movieCollecion');

module.exports = Movie;
