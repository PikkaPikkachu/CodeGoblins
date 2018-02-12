var PDFExtract = require('pdf.js-extract').PDFExtract;
var fs = require('fs')
var pdfExtract = new PDFExtract();
var options = {}; /* options are handed over to pdf.js e.g, { password: 'somepassword' } */
pdfExtract.extract('./Re.pdf', options , function (err, data) {
	if (err) return console.log(err);
	var hello = '';
	for ( let i = 0 ; i < data.pages[0].content.length; i++)
		hello += ' ' + data.pages[0].content[i].str;
	
	fs.writeFileSync('./example-output.json', JSON.stringify(hello, null, '\t'));
	console.log(data.meta.pages);
});

