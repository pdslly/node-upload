var http = require('http'),
	opn = require('opn'),
	path = require('path'),
	log = require('./util/log'),
	colors = require('colors'),
	compression = require('compression'),
	cookieParser = require('cookie-parser'),
	home = require('./routers/home'),
	upload = require('./routers/upload'),
	express = require('express');

function shouldCompress(req, res){
	if(req.headers['x-no-compression']){
		return false;
	} 
	return compression.filter(req, res);
}

var app = express();

app.use(cookieParser());
app.use(compression({filter: shouldCompress}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/', home);
app.post('/upload', upload);

http.createServer(app).listen(3000, '0.0.0.0', function(){
	log.log("server start at localhost:3000");
	opn("http://localhost:3000");
})