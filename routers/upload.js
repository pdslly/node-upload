var path = require('path'),
	formidable = require('formidable'),
	express = require('express'),
	fs = require('fs'),
	log = require('../util/log'),
	router = express.Router();

router.post('/upload', function(req, res, next){
	var form = new formidable.IncomingForm();
	form.encoding = 'utf-8';
	form.uploadDir = path.resolve(__dirname, "../upload");
	form.keepExtentions = true;
	form.maxFileldsSize = 10*1024*1024;

	form.parse(req, function(err, fields, files){
		if(err){
			log.err(err);
			return;
		}

		var extName = '';

		switch(files.img.type){
			case 'image/jpeg':
				extName = 'jpg';
				break;
			case 'image/png':
				extName = 'png';
				break;
			case 'image/x-png':
				extName = 'png';
				break;
			default:
				break;
		}

		if(extName === ''){
			log.err("cannot support this type:" + files.img.type);
			return;
		}

		var newPath = `${form.uploadDir}\\${Math.random().toString(32).substring(2, 10)}.${extName}`;
		log.log(newPath);
		fs.renameSync(files.img.path, newPath);
		res.writeHeader(200);
		res.end("success");
	});
})

module.exports = router;