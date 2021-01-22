const router = require('express').Router();
const controller = require('../controller');

router.get('/', controller.getdata);
router.get('/m', controller.getmovie);
router.get('/s', controller.agrmovie);

module.exports = router;
