var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

// 获取商品接口
router.get('/api/get_goods', function(req, res, next) {
	connection.query('SELECT * from st_goods', function(error, results, fields) {
		if (error) throw error;
		res.send({
			'data': results
		})
	});
});

module.exports = router;
