const route = require('express').Router();
const path = require('path');
const formdata =require('../mongo/models').models.formsData;

route.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'../frontendWorks/HTMLfiles/form.html'));
});

route.post('/', (req,res) => {
	console.log('firing');
	formdata.createNew({
		username: req.body.username,
    fname: req.body.formData.fname,
    lname: req.body.formData.lname,
    gender: req.body.formData.gender,
    dob: req.body.formData.dob,
    contact: req.body.formData.contact,
    weight: req.body.formData.weight,
    height: req.body.formData.height,
    bmi: req.body.formData.bmi,
    fit: req.body.formData.fit,
    form: req.body.formData.form,
    achievements: req.body.formData.achievements
		})
		.then((data) => {
			if (data.password === req.body.password) {
				res.send({data: data})
			}
		})
		.catch((err) => console.log(err))
});

route.get('/resume', (req,res)=>{
	res.sendFile(path.join(__dirname,'../frontendWorks/HTMLfiles/resume.html'));
});

route.post('/getData', (req,res) => {
	formdata.findOne({
		username: req.body.username
	})
		.then((data) => {
			res.send({data: data})
		})
		.catch((err) => console.log(err))
});

module.exports.route = route;
