const bodyParser = require('body-parser');
const path = require("path");
const express = require('express');
const app = express();
const upload = require('express-fileupload');
const http = require('http');

http.Server(app).listen(3000);
console.log("Server Started at port 3000");

const routes = {
  login: require('./api/login').route,
  form: require('./api/form').route,
  webScraper: require('./api/webScraper').route,
  fundGenerator: require('./api/fundGenerator').route,
  rules: require('./api/rules').route,
  video: require('./api/videoClips').route,
  upload: require('./api/upload').route
};


app.use(upload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/scraper', routes.webScraper);
app.use('/',express.static(path.join(__dirname,'frontendWorks')));
app.use('/login',routes.login);
app.use('/form',routes.form);
app.use('/fundGenerator',routes.fundGenerator);
app.use('/rules',routes.rules);
app.use('/video',routes.video);
app.use('/upload',routes.upload)
app.use('/',express.static(path.join(__dirname,'frontendWorks')));


app.get('/',(req,res)=>{
  res.redirect('/HTMLfiles');
});

app.get('/HTMLfiles',(req,res)=>{
  res.sendFile(__dirname+'/frontendWorks/HTMLfiles/index2.html');
});

app.use('/', ( req, res, next) => {
	res.status(404).sendFile(path.join(__dirname,'frontendWorks/HTMLfiles/404ErrorFile.html'))
	next();
});
