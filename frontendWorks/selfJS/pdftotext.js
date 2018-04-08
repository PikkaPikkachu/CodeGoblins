$(document).ready(function () {

	$.get('/upload/score', (data) => {
		console.log('inside pdftotext.js');
		while(!data.score)
		{
			window.reload()
		}
		$('#score').text('Your Resume Score is ' + data.score)
	})

});
