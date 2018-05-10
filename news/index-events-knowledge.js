(function($) {
    "use strict";

	//get number news from url
	var number =1;
	
	//select json text file page
	var newsInfo = "news/newsInformationEN.json";
	
	newsPaginaton('Events');
	collectByNumber(number);
	
	function newsPaginaton(tag){
		//clear newsBlock all
		$("#newsBox").html("");
		
		//get json data
		$.getJSON( newsInfo , function( data ) {
			var display = "display:block";
			var tagNumber = 0;
			$.each( data, function( key, val ) {
				if(tag == val['tag']){
					var newsContent = '\
					<div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" tag="'+val['tag']+'" data-tag-box="'+tagNumber+'" style="'+display+'">\
						<div class="portfolio-item">\
							<figure class="news-img-box-4">\
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
					tagNumber++; 
					if(tagNumber>3){
						display ="display:none";
					}
					$("#newsBox").append(newsContent);
				}
			});	
			
			//create pagination
			var page = Math.ceil(tagNumber/4);
			$("#news-page").html("");
			for(var i=1;i<=page ; i++){
				$("#news-page").append('<li class="page-item"><a class="page-link subscribe-btn ">'+i+'</a></li>');
			}
			
			$("#news-page").append('\
                    <li class="page-item more-page">\
                        <a class="page-link" href="news.html" target="_blank">View More <i class="icofont icofont-long-arrow-right"></i></a>\
                    </li>\
			');
			$("#news-page li:first").addClass('active');
		});
	}						
	
	function collectByNumber(number){
		var start = (number-1)*4;
		var end = number*4;
		var getby = "";
		var tagTex ="";		
		getby = "data-tag-box";
		$("#newsBox > div").hide(800);
		for(var i=start;i<end;i++){
			$("#newsBox > div["+getby+"='"+i+"']").show(800);
		}
		
	}
	
	
	 $(document).on('click', "li.page-item",function() {
		var number = $(this).text();
		$("li.page-item.active").removeClass('active');
		$(this).addClass('active');
		collectByNumber(number);
	});
	
	$(document).on('click', "#filter li" ,function() {
		$("#filter > li > a.active").removeClass('active');
		$(this).find('a').addClass('active');
		var tag = $(this).find('a').attr('data-group');
		newsPaginaton(tag);
	});
	
}(jQuery));