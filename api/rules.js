const router = require('express').Router();

var scraperjs = require('scraperjs');

function callStaticScraper(url, params, callback) {
	scraperjs.StaticScraper.create(url)
		.scrape(function($) {
			return $(`${params}`).map(function() {
				return $(this).attr('href');
			}).get();
		})
		.then(function(scrapedData) {
			callback(scrapedData);
		})
}

router.post('/', (req,res)=>{
	let url = req.body.url;
	let params = req.body.params;
	callStaticScraper(url, params, (scrapedData)=>{
		res.send(scrapedData);
	});
});

module.exports.route = router;
