// var qArticle = userInput
var articleId;
var articleId1;
var articleId2;
var articleId3;
var articleId4;
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&use_lucene_syntax=true&query=trump%20AND%20date_published%253A%255B2016-10-28%20TO%202016-12-04%255D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
		"x-rapidapi-key": "739cc82f48msh772533553684212p13fec1jsnb72c85e62170"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    articleId = response.articles[0].id;
    articleId1 = response.articles[1].id;
    articleId2 = response.articles[2].id;
    articleId3 = response.articles[3].id;
    articleId4 = response.articles[4].id;
    console.log(articleId);
    getTweet()
    
});


function getTweet(){
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-hoaxy.p.rapidapi.com/tweets?ids=%255B"+articleId+"%252C%"+articleId1+"%252C%"+articleId2+"%252C%"+articleId3+"%252C%"+articleId4+"%255D",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
		"x-rapidapi-key": "739cc82f48msh772533553684212p13fec1jsnb72c85e62170"
	}
}

$.ajax(settings).done(function (response) {
    console.log("https://api-hoaxy.p.rapidapi.com/tweets?ids=%255B"+articleId+"%252C%"+articleId1+"%252C%"+articleId2+"%252C%"+articleId3+"%252C%"+articleId4+"%255D");
	console.log(response);
});
}