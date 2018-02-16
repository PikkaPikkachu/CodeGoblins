const route = require('express').Router();
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const path = require('path');

let jobopenString = '';
let hello = '';

route.post('/',function(req,res){
	if(req.files.upfile){
		var file = req.files.upfile,
			name = file.name,
			type = file.mimetype;
		var uploadpath = __dirname + '/uploads/' + name;
		file.mv(uploadpath,function(err){
			if(err){
				console.log("File Upload Failed",name,err);
				res.send("Error Occured!")
			}
			else {
				console.log("File Uploaded",name);
				spec_extractor(name);
				res.sendFile(path.join(__dirname,'../frontendWorks/HTMLfiles/UploadResume.html'))
			}
		});
	}
	else {
		res.send("No File selected !");
		res.end();
	}
});

function sendScore (score) {
	
	console.log('inside upload.js sendScore')
	
	route.get('/score', (req,res) => {
	
	console.log('inside score request');
			res.send({score : score})
	})

}

function spec_extractor(name){
	
	pdfExtract.extract(path.join(__dirname,'uploads', name), {} , function (err, data) {
		if (err) return console.log(err);
		for ( let i = 0 ; i < data.pages[0].content.length; i++)
			jobopenString += ' ' + data.pages[0].content[i].str;
		
		if (jobopenString.length !== 0 && hello.length !== 0)
			keyWordGenerator(jobopenString,hello)
		else
			res_extractor(name);
	});
}

function res_extractor(name){
	
	pdfExtract.extract(path.join(__dirname,'uploads','./SR.pdf'), {} , function (err, data) {
		if (err) return console.log(err);
		for ( let i = 0 ; i < data.pages[0].content.length; i++)
			hello += ' ' + data.pages[0].content[i].str;
		
		if (jobopenString.length !== 0 && hello.length !== 0)
			keyWordGenerator(jobopenString,hello)
		else
			spec_extractor(name);
	});
}

function keyWordGenerator(first, second){
	
	let spawn = require('child_process').spawn;
	let py = spawn('python', [__dirname+'/nlp/res_rate.py', `{"spec": \"${first}\", "resume": \"${second}\"}`]);
	
	let info = '';
	
	py.stdout.on('data', function(data){
		info += data.toString();
		console.log(info)
		sendScore(info)
	});
	
	py.stderr.on('data', (data) => {
		console.log(data.toString());
		console.log("Error occured!");
	});
	py.stdin.end();
}

module.exports.route = route;
