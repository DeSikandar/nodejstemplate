const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommnetSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    movie_id: {
      type: Schema.Types.ObjectId,
    },
    text: { type: String },
    date: { type: Date },
  },
  { collection: 'comments' }
);

module.exports = mongoose.model('commnets', CommnetSchema);
