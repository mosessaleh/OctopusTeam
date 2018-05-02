var express = require('express');
var router = express.Router();
var knex = require('../helpers/knex');

router.get('/', function(reg, res, next) {
  var id = req.param('id');
  knex('users').where('id',1).select().then( function(data) {
      res.send(data);
    });
});
module.exports = router;
