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
	
	
	//clear newsBlock all
	$("#newsBlock").html("");
	
	//get json data
	$.getJSON( newsInfo , function( data ) { 
		console.log(data);	
		$.each( data, function( key, val ) {
			var newsContent = '\
			<div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-4" data-groups=\'["'+val['tag']+'", "Show All"]\'>\
				<div class="portfolio-item">\
					<figure class="news-img-box">\
						<img src="'+val['img']+'">\
						<figcaption>\
							<div class="inner-text">\
								<a href="news-right-sidebar.html?number='+key+'" class="view-more">View more</a>\
								<a href="news-right-sidebar.html?number='+key+'"><img src="assets/img/portfolio-hover.png" alt=""></a>\
							</div>\
						</figcaption>\
					</figure>\
					<div class="content news-content">\
						<a href="news-right-sidebar.html?number='+key+'"><h4>'+val['title']+'</h4></a>\
						<p>'+val['conclusion']+'</p>\
						<a href="news-right-sidebar.html?number='+key+'" class="get-plan">View More <i class="fa fa-share"></i></a>\
					</div>\
				</div>\
			</div>	';
			$("#newsBlock").append(newsContent);
		});	
	});
	
	
	
}(jQuery));