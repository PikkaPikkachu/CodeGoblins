$(document).ready(function () {
	
	$('#signUp').click( function (e) {
		console.log('fire');
		let name = $('#name').val();
		let email = $('#email').val();
		let username = $('#username').val();
		let password = $('#password').val();
		let repeatPassword = $('#repeatPassword').val();
		if( name && email && username && password && (password === repeatPassword)) {
			$.post('/login/signUp', {
				name: name,
				email: email,
				username: username,
				password: password
			}, (data) => {
				window.location.href = '/login';
				console.log('Data Sent for SignUp')
			})
		}
	})
})
