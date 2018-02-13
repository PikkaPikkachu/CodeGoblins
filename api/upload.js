const route = require('express').Router();
// const multer  = require('multer');
const fileUpload = require('express-fileupload');

/*const storage = multer.diskStorage({
	destination: function (req, file,cb) {
		cb(null, './uploads/');
	},
	filename: function(req, file, cb) {
		cb(null, new Date().toISOString + file.originalname
		)
	}
})
const upload = multer({ storage:storage});*/

route.post('/', function (req, res, next) {
	if(req.files.upfile) {
		var file = req.files.upfile,
			name = file.name,
			type = file.mimetype;
		var uploadpath = __dirname + '/uploads/' + name;
		file.mv(uploadpath, function (err) {
			if (err) {
				console.log("File Upload Failed", name, err);
				res.send("Error Occured!")
			}
			else {
				console.log("File Uploaded", name);
				res.send('Done! Uploading files')
			}
		});
	}})
	// let sampleFile = req.files.sampleFile;
	
	// Use the mv() method to place the file somewhere on your server
	// sampleFile.mv('/somewhere/on/your/server/filename.jpg', function (err) {
	// 	if (err)
	// 		return res.status(500).send(err);
	//
	// 	res.send('File uploaded!');
	// })
// })

module.exports.route = route;
