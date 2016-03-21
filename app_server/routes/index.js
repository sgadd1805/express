var express = require('express');
var mainindex = require('../controllers/mainindex');
var router = express.Router();



/* GET home page. */
router.get('/', mainindex.index);

module.exports = router;
