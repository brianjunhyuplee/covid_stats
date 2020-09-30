// Google fact check
//  var key = AIzaSyAv5_cc1x2RMnjTtR8q0Iw0wd-jaMoeZj0;
//  var URL = https://factchecktools.googleapis.com/$discovery/rest?version=v1alpha1&key=AIzaSyAv5_cc1x2RMnjTtR8q0Iw0wd-jaMoeZj0.;

// 739cc82f48msh772533553684212p13fec1jsnb72c85e62170

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://adverifai-api.p.rapidapi.com/source_check",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "adverifai-api.p.rapidapi.com",
		"x-rapidapi-key": "739cc82f48msh772533553684212p13fec1jsnb72c85e62170"
	}
}


$.ajax(settings).done(function (response) {
	console.log(response);
});