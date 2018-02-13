const express = require('express');
const config = require('./config.json');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const http = require('http');
var upload = require('express-fileupload');

http.Server(app).listen(3000); // make server listen on port 80

app.use(upload()); // configure middleware

console.log("Server Started at port 3000");

app.use(upload()); // configure middleware


app.get('/uploadRESUME2',function(req,res){
  res.sendFile(__dirname+'/frontendWorks/HTMLfiles/index3.html');
})
app.post('/upload',function(req,res){
  console.log(req.files);
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
        res.send('Done! Uploading files')
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
})
const routes = {
	login: require('./api/login').route,
	form: require('./api/form').route,
	webScraper: require('./api/webScraper').route,
	fundGenerator: require('./api/fundGenerator').route,
	rules: require('./api/rules').route,
	video: require('./api/videoClips').route,
	upload: require('./api/upload').route
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/scraper', routes.webScraper);
app.use('/',express.static(path.join(__dirname,'frontendWorks')));
app.use('/login',routes.login);
app.use('/form',routes.form);
app.use('/fundGenerator',routes.fundGenerator);
app.use('/rules',routes.rules);
app.use('/video',routes.video);
// app.use('/upload',routes.upload);

app.get('/',(req,res)=>{
	res.redirect('/HTMLfiles');
});

app.get('/HTMLfiles',(req,res)=>{
	res.sendFile(__dirname+'/frontendWorks/HTMLfiles/index2.html');
});

/*
app.listen( process.env.PORT || config.SERVER.PORT ,
	()=> {console.log("Server started at http://localhost:" +config.SERVER.PORT)});
*/

app.post('/upload',function(req,res){
	console.log(req.files);
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
				res.send('Done! Uploading files')
			}
		});
	}
	else {
		res.send("No File selected !");
		res.end();
	};
})

app.get('/HTMLfiles/upload', (req,res) => {
	res.sendFile(path.join(__dirname,'./frontendWorks/HTMLfiles/UploadResume.html'))
})

app.use((req,res)=> res.status(404).send('page not found'));
