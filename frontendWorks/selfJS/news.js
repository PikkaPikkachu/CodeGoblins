$(document).ready(function () {
	
	const newsArray = [{"url":"http://www.ddca.in/", "params" : "marquee"}]
		// {"url":"http://www.cricbuzz.com/cricket-news", "params" : ".cb-nws-hdln-ancr"}];
	
	$('#fetchNews').click(function () {
		for (let news of newsArray) {
			$.post('/scraper', {
				url: news.url,
				params: news.params
			}, (data) => {
				// displayNews(data)
			})
		}
		$.post('/scraper/jsJobs',(data)=>{
			console.log('the one I got to choose');
			displayJSjobs(data);
		});
		$.post('/scraper/pythonJobs', (data)=>{
			console.log('the one I got to choose');
			displayPythonjobs(data)
		});
		$.post('/scraper/buzz',(data)=>{
			console.log('hey');
			// displayInternationalNews(data);
		})
	});


	function displayPythonjobs(datas) {
    newsList.text('');
    datas = datas.splice(1,datas.length-3);
    for (let data of datas) {
      let newsCard = $(`<div class="card" style="height:200px;margin: 20px;width: 90rem; float: left">
												<div class="card-body">
												<p title="${data.turnstileLink}" class="card-text" style="padding: 10px; height: 100px">${data.turnstileLink}</p>
												<p title="${data.company}" class="card-text" style="padding: 10px; height: 100px">${data.company}</p>
											</div>
											</div>`);
     	newsList.append(newsCard)
    }
  }

	function displayJSjobs(datas) {
    internationalList.text('');
    datas = datas.splice(2);
    for (let data of datas) {
      let newsCard = $(`<div class="card" style="height:200px;margin: 20px;width: 90rem; float: left">
												<div class="card-body">
												<p title="${data.turnstileLink}" class="card-text" style="padding: 10px; height: 100px">${data.turnstileLink}</p>
												<p title="${data.company}" class="card-text" style="padding: 10px; height: 100px">${data.company}</p>
											</div>
											</div>`);
      internationalList.append(newsCard)
    }
  }

	function displayInternationalNews(datas) {
		internationalList.text('');
    for (let data of datas) {
      let newsCard = $(`<div class="card" style="height:200px;margin: 20px;width: 30rem; float: left">
												<a href="http://www.cricbuzz.com/" target="_blank"><img class="card-img-top" style="width: 100%; height: 60%" src="${data.source}" alt="Card image cap"></a>
												<div class="card-body">
												<p title="${data.text}" class="card-text" style="padding: 10px; height: 100px">${data.text.substring(0,60).concat(' ...')}</p>
											</div>
											</div>`);
      internationalList.append(newsCard)
    }

	}


	$('#fetchNews').click()
	let newsList = $('#newsList');
	let internationalList = $('#newsListCrickbuzz');

	function displayNews(totalNews) {
		totalNews = totalNews[0].split('\n');
		console.log(totalNews)
		
		newsList.html('');
		for(let news = 1; news <totalNews.length; news++) {
			totalNews[news] = totalNews[news].trim()
			if(totalNews[news].trim() !== "") {
				let newsCard = $(`<div class="card" style="height:200px;margin: 20px;width: 30rem; float: left">
												<a href="http://www.ddca.in/" target="_blank"><img class="card-img-top" style="width: 100%; height: 60%" src="../img/ddca.png" alt="Card image cap"></a>
												<div class="card-body">
												<p title="${totalNews[news].trim()}" class="card-text" style="padding: 10px; height: 100px">${totalNews[news].trim().substring(0,60).concat(' ...')}</p>
											</div>
											</div>`);
				newsList.append(newsCard)
			}
		}
	}
})
