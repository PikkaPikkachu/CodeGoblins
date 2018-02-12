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
    let achievements = $('#achievements').val();
    let Email = $('#Email').val();
    let Address = $('#Address').val();
    let School = $('#School').val();
    let College = $('#College').val();
    let LinkedIn = $('#LinkedIn').val();
    let VolunteerExperience = $('#VolunteerExperience').val();
    

		let formData = {
			fname,
      lname,
      dob,
			VolunteerExperience,
      contact,
      gender,
      LinkedIn,
      College,
    	School,
    	Address,
    	Email,
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
