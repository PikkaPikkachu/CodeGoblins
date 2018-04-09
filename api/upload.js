const route = require('express').Router();
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const path = require('path');
const app  = require('express')();


route.get('/resumeScore', (req,res)=>{
	res.send(app.locals.resumeScore);
});

route.post('/',function(req,res){
	console.log(req.files.upfile);
	if(req.files.upfile){
		var file = req.files.upfile,
			name = file.name,
			type = file.mimetype;
		var uploadpath = __dirname + '/uploads/' + 'test.pdf';
		file.mv(uploadpath,function(err){
			if(err){
				console.log("File Upload Failed",name,err);
				res.send("Error Occured!")
			}
			else {
			  spec_extractor('test.pdf', res);
      }
		});
	}
	else {
		res.send("No File selected !");
		res.end();
	}
});

function sendScore (score) {
	route.get('/score', (req,res) => {
	res.send({score : score})
	})

}

function spec_extractor(name, res) {
	pdfExtract.extract(path.join(__dirname,'uploads', name), {} , function (err, data) {
		if (err) return console.log(err);
    let jobopenString = '';
    for ( let i = 0 ; i < data.pages[0].content.length; i++) {
		  jobopenString += ' ' + data.pages[0].content[i].str;
		  if(i === data.pages[0].content.length-1) {
		    resumeExtractor(jobopenString, res);
      }
    }
	});
}

function resumeExtractor(jobopenString,res){
	pdfExtract.extract(path.join(__dirname,'uploads','./SR.pdf'), {} , function (err, data) {
		if (err) return console.log(err);
    let hello = '';
    for ( let i = 0 ; i < data.pages[0].content.length; i++) {
		  hello += ' ' + data.pages[0].content[i].str;
      if(i === data.pages[0].content.length-1) {
        keyWordGenerator(jobopenString, hello, res)
      }
    }

	});
}

function keyWordGenerator(first, second, result){
	let spawn = require('child_process').spawn;
	let py = spawn('python', [__dirname+'/nlp/res_rate.py', `{"spec": \"${first}\", "resume": \"${second}\"}`]);
	
	let info = '';
	
	py.stdout.on('data', function(data){
		info = data.toString();
		console.log(info);
    app.locals.resumeScore = info;
    result.sendStatus(200);
	});
	
	py.stderr.on('data', (data) => {
		console.log(data.toString());
		console.log("Error occured!");
	});
	py.stdin.end();
}

module.exports.route = route;
