function $(exp){
	return document.querySelector(exp);
}

var clickFn = function(){
	var file = $("#file"),
		fData = new FormData(),
		xhr = new XMLHttpRequest();

	if(!file.files.length){
		console.error("please select upload file!!!");
		return;
	}

	fData.append("img", file.files[0]);

	xhr.open("post", "upload", true);
	xhr.send(fData);
}