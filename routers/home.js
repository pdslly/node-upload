var express = require('express'),
	path = require('path'),
	router = express.Router();

router.get('/', function(req, res, next){
	res.sendFile(path.resolve(__dirname, "../public/view/index.html"))
})

module.exports = router;