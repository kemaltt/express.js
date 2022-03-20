var express = require('express');
var router = express.Router();
const { getAllUser } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', getAllUser);

module.exports = router;
