$(document).ready(function () {
	
	const newsArray = [{"url":"https://www.icc-cricket.com/about/cricket/rules-and-regulations/playing-conditions", "params" : "a"}]
	
	$('#tableList').click(function () {
		for (let news of newsArray) {
			$.post('/rules', {
				url: news.url,
				params: news.params
			}, (data) => {
				displayRules(data)
			})
		}
	});
	
	$('#tableList').click()
	let tableList = $('#tableList');
	
	function displayRules(totalRules) {
		console.log(totalRules)
		$('#preLOADER').show();
		tableList.innerHTML = $(`<table class="table table-striped">
                  <thead>
                  <th width="12%">S No.</th>
                  <th>Link</th>
                  </thead>
                  <tbody>`);
		for(let rule = 50; rule <totalRules.length; rule++) {
			let tableListItem = $(`<hr><tr><td width="12%"> &nbsp; &nbsp; &nbsp;${rule-49} &nbsp; &nbsp; &nbsp; </td><td><a href="${totalRules[rule]}">${totalRules[rule].split('/').reverse()[0].split('-').join(' ').split('_').join(' ')}</a></td></tr>`);
			tableList.append(tableListItem);
			if (rule === totalRules.length -1) {
        $('#preLOADER').hide();
      }
		}
		tableList.append(`</tbody>
                </table>
              `);
		
	}
})
