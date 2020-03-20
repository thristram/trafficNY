var express = require('express');
const path = require('path')
var router = express.Router();
const Main = require('../Models/MainModel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/index.html'))
});
router.get('/control', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/control.html'))
});
router.get('/api/add', function(req, res, next) {
	let name = req.query.name;
	let value = req.query.value;
	Main.addCommend(name, value);
	res.send("ok")
});
router.get('/api/control/get', function(req, res, next) {
	res.json({number: Main.currentNumber})
});
router.get('/api/get', function (req, res, next) {
	if(parseInt(req.query.number)){
		Main.currentNumber = parseInt(req.query.number);
	}

	res.json(Main.pendingCommends);
	Main.clearCommend();
});
module.exports = router;
