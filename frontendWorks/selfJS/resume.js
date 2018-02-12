$(document).ready(function () {
	
	$.post('/form/getData',({
		username: JSON.parse(localStorage.getItem('userData')).data.username
	}),
		(data) => {
			makeResume(data)
		}
	)
	
	
	$('#pdf').click( function () {
		window.print()
	})
	function makeResume(data) {
		data = data.data;
		$('#name').text(data.fname + " " + data.lname );
		$('#email').text(JSON.parse(localStorage.getItem('userData')).data.email);
		if(data.contact !== "") {
			$('#mobile').text(data.contact);
		}
    if(data.dob !== "") {
      $('#dob').text(data.dob);
    }
    if(data.gender !== "") {
      $('#gender').text(data.gender);
    }
    if(data.weight !== "") {
      $('#weight').text(data.weight);
    }
    if(data.height !== "") {
      $('#height').text(data.height);
    }
    if(data.bmi !== "") {
      $('#BMI').text(data.bmi);
    }
    if(data.bmr !== "") {
      $('#BMR').text(data.bmr);
    }
    if(data.fit !== "") {
      $('#fitnessIndex').text(data.fit);
    }
    if(data.form !== "") {
      $('#formIndex').text(data.form);
    }
    if(data.achievements !== "") {
      $('#achievements').text(data.achievements);
    }
	}
	
});
