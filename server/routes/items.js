var express = require('express');
var router = express.Router();
var knex = require('../helpers/knex');
/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('items').select().then( function(data) {
    res.send(data);
  });
});

router.post('/:id', function(reg, res, next) {
    var id = req.params.id;
    knex('items').select().where('id',id).then( function(data) {
        res.send(data);
      });
});

module.exports = router;
