var express = require('express');
var router = express.Router();
const db = require('../model/helper');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello World!");
});




module.exports = router;
