(function($) {
    "use strict";

	//get number news from url
	var numberpage = 0;
	var queryString = window.location;	
	var queryString = decodeURIComponent(window.location.search);
	queryString = queryString.substring(1);
	var queries = queryString.split("&");
	if(queries[0]){
		numberpage = parseInt(queries[0].split("=")[1]);
	}
	
	//select json text file page
	var newsInfo = "news/newsInformationEN.json";
	
	//get json data
	$.getJSON( newsInfo , function( data ) { 
		//set news article
		var newsData = data[numberpage];
		$("#news-img").attr('src',newsData['img']);
		$("#date").html('<i class="icofont icofont-ui-calendar"></i> '+newsData['date']);
		$("#tag").html('<i class="icofont icofont-ui-tag"></i> '+newsData['tag']);
		$("#title").html(newsData['title']);
		$("#article").html(newsData['article']);
		
		//set recent article
		if(numberpage < (data.length-1) && numberpage > 0 ){
			var preNum = numberpage-1;
			var laterNum = numberpage+1;
			var preNewsData = data[preNum];
			var laterNewsData = data[laterNum];
		}
		else if (numberpage == 0){
			var preNum = numberpage+1;
			var preNewsData = data[preNum];
			if(numberpage+1 <= (data.length-1)){
				var laterNum = numberpage+2;
				var laterNewsData = data[laterNum];
			}			
		}
		else if (numberpage == (data.length-1)){
			var preNum = numberpage-1;
			var preNewsData = data[preNum];
			if(numberpage-1 >= 0){
				var laterNum = numberpage-2;
				var laterNewsData = data[laterNum];
			}			
		}
		
		// set side bar
		if(preNewsData){
			$("#recent-img").attr('src',preNewsData['img']);
			$("#recent-date").html('<i class="icofont icofont-ui-calendar"></i> '+preNewsData['date']);
			$("#recent-tag").html('<i class="icofont icofont-ui-tag"></i> '+preNewsData['tag']);
			$("#recent-link").attr('href','news-right-sidebar.html?number='+preNum);
			$("#recent-title").html(preNewsData['title']);
			$("#recenet-conclusion").html(preNewsData['conclusion']);
		}
		if(laterNewsData){
			$("#next-img").attr('src',laterNewsData['img']);
			$("#next-date").html('<i class="icofont icofont-ui-calendar"></i> '+laterNewsData['date']);
			$("#next-tag").html('<i class="icofont icofont-ui-tag"></i> '+laterNewsData['tag']);
			$("#next-link").attr('href','news-right-sidebar.html?number='+laterNum);
			$("#next-title").html(laterNewsData['title']);
			$("#next-conclusion").html(laterNewsData['conclusion']);
		}
	});
}(jQuery));