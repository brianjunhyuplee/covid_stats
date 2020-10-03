$(document)
  .ready(function () {
    $(document).on('keypress', function (enter) {
      if (enter.which == 13) {
        var countryName = $("#search").val();
        $("#loading").addClass("loading");
        console.log(countryName);

        //get related articles by country on covid
        var queryURL = 'https://content.guardianapis.com/search?q=%22covid%20' + countryName + '%22&api-key=1cd5cbec-afb6-4aea-b671-03563ccf7f61';
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
        });
      
        //get stats covid by country
        var URL = 'https://api.covid19api.com/country/'+countryName;
        $.ajax({
          url: URL,
          method: "GET"
        }).then(function (response) {
          var lastIndex = response.length-1;
          var latestData = response[lastIndex];
          var dateOf = response[lastIndex].Date;
          var confirmedCases = response[lastIndex].Confirmed;
          var activeCases = response[lastIndex].Active;
          var deathNum = response[lastIndex].Deaths;
          var recoveredNum = response[lastIndex].Recovered;
      });

    }
      // var settings = {
      // 	"async": true,
      // 	"crossDomain": true,
      // 	"url": "https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&use_lucene_syntax=true&query=" + search,
      // 	"method": "GET",
      // 	"headers": {
      // 		"x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
      // 		"x-rapidapi-key": "739cc82f48msh772533553684212p13fec1jsnb72c85e62170"
      // 	}
      // }

      // $.ajax(settings).done(function (response) {
      //     console.log(response);
      //     $("#loading").removeClass("loading");
      // });
      // }
      // });


      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function () {
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
      $(window).ready(function () {
        $(".ui.text.container").fadeIn(1500);
      });
    });
  });