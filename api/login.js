const route = require('express').Router();
const path = require('path');
const user =require('../mongo/models').models.users;

route.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'../frontendWorks/HTMLfiles/signIn.html'));
});

route.post('/signIn', (req,res) => {
  user.signInVerify({
			username: req.body.username
		})
		.then((data) => {
      if (data.password === req.body.password) {
				res.send({data: data})
			}
		})
		.catch((err) => console.log(err))
});

route.post('/signUp', (req,res) => {
	user.createNew({
			name: req.body.name,
			email: req.body.email,
			username: req.body.username,
			password: req.body.password
		})
		.then(() => {
			res.send({data:'done'});
			console.log('User Created Successfully')
		})
		.catch((err) => console.log(err));
})

module.exports.route = route;
