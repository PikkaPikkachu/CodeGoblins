const router = require('express').Router();

var scraperjs = require('scraperjs');

function callStaticImg(url, params, callback) {
	scraperjs.StaticScraper.create(url)
		.scrape(function($) {
			return $(`${params}`).map(function() {
				return $(this).attr('src');
			}).get();
		})
		.then(function(scrapedData) {
			callback(scrapedData);
		})
}

function callStaticScraper(url, params, callback) {
  scraperjs.StaticScraper.create(url)
    .scrape(function($) {
      return $(`${params}`).map(function() {
        return $(this).text();
      }).get();
    })
    .then(function(scrapedData) {
      callback(scrapedData);
    })
}

function callDynamicScraper(url, params, callback) {
  scraperjs.DynamicScraper.create(url)
    .scrape(function($) {
      return $(`${params}`).map(function() {
        return $(this).text();
      }).get();
    })
    .then(function(news) {
      callback(news);
    }
    )
}

router.post('/buzz', (req,res)=>{
  scraperjs.StaticScraper.create("http://www.cricbuzz.com/")
    .scrape(function($) {
      return $(".sml-crd-hdln").map(function() {
        data = {
          source: "http:" + this.parent.prev.children[0].children[0].attribs.source,
          text: $(this).text()
        };
        return data;
      }).get();
    })
    .then(function(scrapedDatas) {
      res.send(scrapedDatas);
    })
});

router.post('/imgData', (req,res)=>{
	let url = req.body.url;
	let params = req.body.params;
	callStaticImg(url, params, (scrapedData)=>{
		res.send(scrapedData);
	});
});


router.post('/jsJobs', (req,res)=>{
  scraperjs.StaticScraper.create("https://www.indeed.co.in/jobs?q=javascript&l=Delhi")
    .scrape(function($) {
      return $(".turnstileLink").map(function() {
      	console.log(this)
        data = {
          turnstileLink: $(this).text(),
          company: $(this).parent().next().text()
        }
        console.log(data);
        return data;
      }).get();
    })
    .then(function(scrapedDatas) {
      res.send(scrapedDatas);
    })
});

router.post('/pythonJobs', (req,res)=>{
  scraperjs.StaticScraper.create("https://www.indeed.co.in/python-jobs-in-Delhi")
    .scrape(function($) {
      return $(".turnstileLink").map(function() {
      	console.log(this.attribs.href)
        data = {
      		link: $(this).attrib.href,
          turnstileLink: $(this).text(),
          company: $(this).parent().next().text()
        }
        console.log(data);
        return data;
      }).get();
    })
    .then(function(scrapedDatas) {
      res.send(scrapedDatas);
    })
});

router.post('/', (req,res)=>{
  
  let url = req.body.url;
  let params = req.body.params;
  callStaticScraper(url, params, (scrapedData)=>{
    res.send(scrapedData);
  });
});

module.exports.route = router;
