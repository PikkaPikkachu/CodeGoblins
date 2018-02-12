$(document).ready(function () {
	
	$('#signIn').click( function () {
		let username = $('#username').val();
		let password = $('#password').val();
		
		if( username && password) {
			$.post('/login/signIn', {
				username: username,
				password: password
			}, (data) => {
				localStorage.setItem('userData', JSON.stringify(data));
				window.location.href = "../HTMLfiles/dashboard.html";
			})
		}
	})
});
