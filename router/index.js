const authrouter = require('./auth');
const commentro = require('./comment');

const initailize = (app) => {
  app.use('/api/auth', authrouter);
  app.use('/api/comment', commentro);
};

module.exports = {
  initailize,
};
