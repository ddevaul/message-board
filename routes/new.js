const express = require('express');
const router = express.Router();
const { messages } = require('../messages/messages')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'New Message' });
});

router.post('/', function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.author, added: new Date()});
  res.redirect(req.headers.origin);
});

module.exports = router;
 