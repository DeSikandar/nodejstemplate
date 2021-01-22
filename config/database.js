const mongoose = require('mongoose');

const initialize = () => {
  const uri = `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_password}@cluster0.sqg9m.mongodb.net/sample_mflix?retryWrites=true&w=majority`;
  // const uri = `mongodb+srv://${process.env.mongo_user}:${process.env.mongo_password}@app.jh4nj.mongodb.net/school2?retryWrites=true&w=majority`;

  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('database connected');
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  initialize,
};
