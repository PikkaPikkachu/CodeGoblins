$(document).ready(function () {

	$('#viewResume').click(function (e) {
	  e.preventDefault();
		window.location.href = '/form/resume'
  });

  document.getElementById('displayName').innerText = `${JSON.parse(localStorage.getItem('userData')).data.name}`;

	$('#submit').click( function () {
    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let dob = $('#dob').val();
    let contact = $('#contact').val();
    let gender = $('#gender').val();
    let weight = $('#weight').val();
    let height = $('#height').val();
    let bmi = $('#bmi').val();
    let bmr = $('#bmr').val();
    let fit = $('#fit').val();
    let form = $('#form').val();
    let achievements = $('#achievements').val();

		let formData = {
			fname,
      lname,
      dob,
			bmr,
      contact,
      gender,
      weight,
      height,
    	bmi,
    	fit,
    	form,
			achievements
		};
		if( formData ) {
      console.log(formData);
      $.post('/form/', {
				username: JSON.parse(localStorage.getItem('userData')).data.username,
				formData
			}, (data) => {
				console.log('hey',	data);
			})
		}
	})
});
