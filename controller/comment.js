const { AggregationCursor } = require('mongoose');
const { comment, movie } = require('../models');
const controller = {
  async getdata(req, res) {
    const cos = await comment.find().limit(1000);
    res.json(cos);
  },
  async getmovie(req, res) {
    const movi = await movie.find().limit(10);
    res.json(movi);
  },
  async agrmovie(req, res) {
    const data = await comment.aggregate([
      { $limit: 5 },
      { $unwind: '$date' },
      {
        $lookup: {
          from: 'users',
          localField: 'email',
          foreignField: 'email',
          as: 'movies_comment',
        },
      },
    ]);

    res.json(data);
  },
};

module.exports = controller;
