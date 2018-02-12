$(document).ready(function () {
	
	document.getElementById('displayName').innerText = `${JSON.parse(localStorage.getItem('userData')).data.name}`;

  $('#viewFund').click(function (e) {
    e.preventDefault();
    window.location.href = '/HTMLfiles/viewFundGenerator.html'
  });

	$('#submit').click(function () {
		let money = $('#money').val();
		let fname = $('#fname').val();
		let lname = $('#lname').val();
		let purpose = $('#purpose').val();
		let contactDetails = $('#contactDetails').val();
		let mop = $('#mop').val();
		
		$.post('/fundGenerator', {
			username: JSON.parse(localStorage.getItem('userData')).data.username,
			fname: fname,
			lname: lname,
			purpose: purpose,
			money: money,
			contactDetails: contactDetails,
			mop: mop
		}, (data) => {
			console.log(data);
		})
		
		$.post('/fundGenerator/getGenerator',{
			username: JSON.parse(localStorage.getItem('userData')).data.username
		}, (data) => {
			generateFinal(data)
		})
	})
	
	function generateFinal(data) {
		console.log(data)
	}
})
