var PDFExtract = require('pdf.js-extract').PDFExtract;
var fs = require('fs')
var pdfExtract = new PDFExtract();
var options = {}; /* options are handed over to pdf.js e.g, { password: 'somepassword' } */

var jobopenString = '';
var hello = '';
spec_extractor();
function spec_extractor(){

	pdfExtract.extract('./SR.pdf', options , function (err, data) {

		if (err) return console.log(err);
		var hello = '';
		for ( let i = 0 ; i < data.pages[0].content.length; i++)
			jobopenString += ' ' + data.pages[0].content[i].str;

			if (jobopenString.length !== 0 && hello.length !== 0)
				keyWordgenertor(jobopenString,hello)
			else
				res_extractor();

		// fs.writeFileSync('./jobopening.json', JSON.stringify(hello, null, '\t'));

	});

}

function res_extractor(){
	pdfExtract.extract('./Re.pdf', options , function (err, data) {

		if (err) return console.log(err);
		for ( let i = 0 ; i < data.pages[0].content.length; i++)
			hello += ' ' + data.pages[0].content[i].str;

			if (jobopenString.length !== 0 && hello.length !== 0)
				keyWordgenertor(jobopenString,hello)
			else
				spec_extractor();
		// fs.writeFileSync('./resume.json', JSON.stringify(hello, null, '\t'));

	});
}



function keyWordgenertor(first, second){

	var spawn = require('child_process').spawn;
	var py = spawn('python', [__dirname+'/nlp/res_rate.py', `{"spec": \"${first}\", "resume": \"${second}\"}`]);

	var info = '';

	py.stdout.on('data', function(data){
		info += data.toString();
		console.log(info)
	});

	py.stderr.on('data', (data) => {
			console.log(data.toString());
			console.log("Error occured!");
	});


		py.stdin.end();
}
