var express = require('express');
var router = express.Router();
var knex = require('../helpers/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users').select().then( function(data) {
    res.send(data);
  });
});

// router.get('/:id', function(reg, res, next) {
//   var id = req.param('id');
//   knex('users').where('id',id).select().then( function(data) {
//       res.send(data);
//     });
// });
module.exports = router;
