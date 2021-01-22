const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchem = new Schema(
  {
    plot: { type: String },
    genres: { type: Array },
    runtime: { type: Number },
    cast: { type: [] },
    num_mflix_comments: { type: Number },
    title: { type: String },
    fullplot: { type: String },
    countries: { type: [] },
    released: { type: Date },
    directors: { type: [] },
    rated: { type: String },
    awards: {
      wins: { type: Number },
      nominations: { type: Number },
      text: { type: String },
    },
    lastupdated: { type: Date },
    year: { type: Number },
    imdb: {
      rating: { type: Number },
      votes: { type: Number },
      id: { type: Number },
    },
    type: { type: String },
    tomatoes: {
      viewer: {
        rating: { type: Number },
        numReviews: { type: Number },
        meter: { type: Number },
      },
      lastupdated: { type: Date },
    },
  },
  { collection: 'movies' }
);

movieSchem.static = {
  findallmovie(page = 1) {
    const skip = 10 * (page - 1);
    return this.find().skip(skip).limit(10).exec();
  },
};
module.exports = mongoose.model('movies', movieSchem);
