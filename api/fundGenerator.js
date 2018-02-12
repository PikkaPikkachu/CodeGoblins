const route = require('express').Router();
const path = require('path');
const fundGenerator =require('../mongo/models').models.fundsGenerator;

route.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'../frontendWorks/HTMLfiles/fundGenerator.html'));
});

route.post('/', (req,res) => {
	fundGenerator.createNew({
		username: req.body.username,
		fname: req.body.fname,
		money: req.body.money,
		lname: req.body.lname,
		purpose: req.body.purpose,
		contactDetails: req.body.contactDetails,
		mop: req.body.mop
	})
		.then(() => {
			console.log('sent fundGenerator to database')
		})
		.catch((err) => console.log(err))
})

route.post('/getGenerator', (req,res) => {
	fundGenerator.findOne({
		username: req.body.username
	})
	.then((data) => {
		res.send({data: data})
	})
})

module.exports.route = route;
