// var qArticle = userInput();

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&use_lucene_syntax=true&query="+qArticle+"%20AND%20date_published%253A%255B2016-10-28%20TO%202016-12-04%255D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
		"x-rapidapi-key": "739cc82f48msh772533553684212p13fec1jsnb72c85e62170"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});