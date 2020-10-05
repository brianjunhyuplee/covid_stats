$(document)
  .ready(function () {
    
    
    

    $(document).ready(function () {
      // scroll for menu
      $('div.ui').find('a').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $('#'+$href).offset();
        window.scrollTo($anchor.left,$anchor.top);
        return false;
    });


     
      $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=covid19 world&domains=us.cnn.com,cbsnews.com,cbc.ca,bbc.co.uk,axios.com,aljazeera.com,abcnews.go.com,bloomberg.com,wired.com,reuters.com,wsj.com,nytimes.com&sortBy=publishedAt&apiKey=3ae30d398e914295b27c15aeddce8ec5",
        method: "GET"
      }).then(function (response) {
        

        for (var i = 0; i < 3; i++){
            

              var websiteUrl = response.articles[i].url;
              var websiteTitle = response.articles[i].title;
              var publisher = response.articles[i].source.name;
              var textContent = response.articles[i].description;
              var author = response.articles[i].author;


              var column = $("<div>").addClass("column news").attr("style","width: 30%; padding: 20px;");
              var card = $("<a>").addClass("ui fluid centered card").attr("href", websiteUrl);
              var content = $("<div>").addClass("content");
              var header = $("<div>").addClass("header").text(websiteTitle).attr("style", "padding-bottom: 7px;");
              var meta = $("<div>").addClass("meta");
              var subHead = $("<span>").addClass("category").text(publisher);
              var description = $("<div>").addClass("description");
              var descriptionText = $("<p>").text(textContent);
              var extraContent = $("<div>").addClass("extra content");
              var authorTag = $("<div>").addClass("right floated author").text(author).attr("style", "color: #c7383d");
              

              meta.append(subHead);
              description.append(descriptionText);
              extraContent.append(authorTag);
              $(".middle.aligned.row").append(column.append(card.append(content.append(header, meta, description), extraContent)));
              
            }


          });

        });
    
    $(document).on('keypress', function (enter) {
      if (enter.which == 13) {
        var countryName = $("#search").val();
        $("#loading").addClass("loading");
        

        $(".column.news").remove();
      
        $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=covid " + countryName + "&domains=us.cnn.com,cbsnews.com,cbc.ca,bbc.co.uk,axios.com,aljazeera.com,abcnews.go.com,bloomberg.com,wired.com,reuters.com,wsj.com,nytimes.com,foxnews.com&sortBy=relevancy,publishedAt&apiKey=3ae30d398e914295b27c15aeddce8ec5",
        method: "GET"
      }).then(function (response) {
      

        for (var i = 0; i < 3; i++){
              
              $("#loading").removeClass("loading");


              $("#countryName").text(countryName);
              

              var websiteUrl = response.articles[i].url;
              var websiteTitle = response.articles[i].title;
              var publisher = response.articles[i].source.name;
              var textContent = response.articles[i].description;
              var author = response.articles[i].author;

              var column = $("<div>").addClass("column news").attr("style","width: 30%; padding: 20px;");
              var card = $("<a>").addClass("ui fluid centered card").attr("href", websiteUrl);
              var content = $("<div>").addClass("content");
              var header = $("<div>").addClass("header").text(websiteTitle).attr("style", "padding-bottom: 7px;");
              var meta = $("<div>").addClass("meta");
              var subHead = $("<span>").addClass("category").text(publisher);
              var description = $("<div>").addClass("description");
              var descriptionText = $("<p>").text(textContent);
              var extraContent = $("<div>").addClass("extra content");
              var authorTag = $("<div>").addClass("right floated author").text(author).attr("style", "color: #c7383d");

              meta.append(subHead);
              description.append(descriptionText);
              extraContent.append(authorTag);
              $(".middle.aligned.row").append(column.append(card.append(content.append(header, meta, description), extraContent)));
              
            }
        



          
         
         



        
      });

        //get related articles by country on covid
        // var queryURL = 'https://content.guardianapis.com/search?q=%22covid%20' + countryName + '%22&api-key=1cd5cbec-afb6-4aea-b671-03563ccf7f61';
        // $.ajax({
        //   url: queryURL,
        //   method: "GET"
        // }).then(function (response) {
        //   console.log(response.response.results);
        //   for (var i = 0; i < response.response.results.length;i++){
        //     if (i>3){
        //       break;
        //     }
        //     var websiteUrl = response.response.results[i].webUrl;
        //     var websitetitle = response.response.results[i].webTitle;
        //   }
        //   

        // });

        
        
        // get stats covid by country
        var URL = 'https://api.covid19api.com/total/country/' + countryName;
        $.ajax({
          url: URL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
          var lastIndex = response.length-1;
          var latestData = response[lastIndex];
          var dateOf = response[lastIndex].Date;
          var confirmedCases = response[lastIndex].Confirmed;
          var activeCases = response[lastIndex].Active;
          var deathNum = response[lastIndex].Deaths;
          var recoveredNum = response[lastIndex].Recovered;


          $("#searchContainer").fadeOut(500);

          var casesDisplay = $("<h1>").addClass("").text(author).attr("style", "color: #c7383d");
            
          // $("#caseContainer").fadeIn(500);
          // $("#countryDisplay").text(countryName);
          // $("#totalCases").text(confirmedCases);
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

  $(window).ready(function() {
    $(".ui.text.container").fadeIn(500);
  });
});