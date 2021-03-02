const express = require('express');
const { messages } = require('../messages/messages')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Messaging App", messages });
});

module.exports = router;
 