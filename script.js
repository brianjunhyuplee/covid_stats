$(document)
.ready(function() {

// var qArticle = userInput
var articleId;
var articleId1;
var articleId2;
var articleId3;
var articleId4;





$(document).on('keypress',function(enter) {
  if(enter.which == 13) {
    var search = $("#search").val();
    $("#loading").addClass("loading");
    console.log(search);





var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&use_lucene_syntax=true&query=" + search,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
		"x-rapidapi-key": "739cc82f48msh772533553684212p13fec1jsnb72c85e62170"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    $("#loading").removeClass("loading");
});
}
});


  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    });

  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;

  // $(window).scroll(function(){
  //   $(".ui.header").fadeIn(1500);
  // });
  $(window).ready(function() {
    $(".ui.text.container").fadeIn(1500);
  });
});