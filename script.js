$(document)
  .ready(function () {
    
    
    

    $(document).ready(function () {
     
      $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=covid19 worldwide&sortBy=popularity&apiKey=3ae30d398e914295b27c15aeddce8ec5",
        method: "GET"
      }).then(function (response) {
        
        
        console.log(response);

        for (var i = 0; i < 3; i++){
              

              var websiteUrl = response.articles[i].url;
              var websiteTitle = response.articles[i].title;
              var publisher = response.articles[i].source.name;
              var textContent = response.articles[i].content;
              var author = response.articles[i].author;


              var column = $("<div>").addClass("column").attr("style","width: 30%; padding: 20px;");
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
        console.log(countryName);

        $(".column").remove();
      
        $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=covid "+ countryName +"&sortBy=popularity&apiKey=3ae30d398e914295b27c15aeddce8ec5",
        method: "GET"
      }).then(function (response) {
        
        
        console.log(response);

        for (var i = 0; i < 3; i++){
              
              $("#loading").removeClass("loading");


              $("#countryName").text(countryName);
              

              var websiteUrl = response.articles[i].url;
              var websiteTitle = response.articles[i].title;
              var publisher = response.articles[i].source.name;
              var textContent = response.articles[i].content;
              var author = response.articles[i].author;


              var column = $("<div>").addClass("column").attr("style","width: 30%; padding: 20px;");
              var card = $("<a>").addClass("ui fluid centered card").attr("href", websiteUrl);
              var content = $("<div>").addClass("content");
              var header = $("<div>").addClass("header").text(websiteTitle).attr("style", "padding-bottom: 7px;");
              var meta = $("<div>").addClass("meta");
              var subHead = $("<span>").addClass("category").text(publisher);
              var description = $("<div>").addClass("description");
              var descriptionText = $("<p>").text(textContent);
              var extraContent = $("<div>").addClass("extra content");
              var authorTag = $("<div>").addClass("right floated author").text(author).attr("style", "color: #c7383d");
              


              // card.attr("style","width: 100px; padding: 20px;");



              meta.append(subHead);
              description.append(descriptionText);
              extraContent.append(authorTag);
              $(".middle.aligned.row").append(column.append(card.append(content.append(header, meta, description), extraContent)));
              
            }
        



          
         
         



        
      });


        
    //     var url = '';
    //     var req = new Request(url);
    //     fetch(req).then(function(response) {
    //     console.log(response.json());
    // })

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

      
        //get stats covid by country
      //   var URL = 'https://api.covid19api.com/country/'+ countryName;
      //   $.ajax({
      //     url: URL,
      //     method: "GET"
      //   }).then(function (response) {
      //     var lastIndex = response.length-1;
      //     var latestData = response[lastIndex];
      //     var dateOf = response[lastIndex].Date;
      //     var confirmedCases = response[lastIndex].Confirmed;
      //     var activeCases = response[lastIndex].Active;
      //     var deathNum = response[lastIndex].Deaths;
      //     var recoveredNum = response[lastIndex].Recovered;
      // });

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
    $(".ui.text.container").fadeIn(500);
  });
});