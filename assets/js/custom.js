(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        // Header Slide
        $(".header-slider").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-left"></i>'],
            autoplay: true,
            autoplayTimeout: 4000,
            animateIn: 'pulse',
            animateOut: 'fadeOut',
            smartSpeed: 250
        });

        // Header Slide items with animate.css
        var owl = $('.header-slider');
        owl.owlCarousel();
        owl.on('translate.owl.carousel', function(event) {
            $('.header-single-slider h1').removeClass('animated').hide();
            $('.header-single-slider h2').removeClass('animated fadeInUp').hide();
            $('.header-single-slider h3').removeClass('animated fadeInUp').hide();
            $('.header-single-slider h4').removeClass('animated fadeInUp').hide();
            $('.header-single-slider p').removeClass('animated').hide();
            $('.header-single-slider .boxed-btn').removeClass('animated').hide();
        });

        owl.on('translated.owl.carousel', function(event) {
            $('.header-single-slider h1').addClass('animated fadeInUp').show();
            $('.header-single-slider h2').addClass('animated fadeInUp').show();
            $('.header-single-slider h3').addClass('animated fadeInUp').show();
            $('.header-single-slider h4').addClass('animated fadeInUp').show();
            $('.header-single-slider p').addClass('animated fadeInDown').show();
            $('.header-single-slider .boxed-btn').addClass('animated fadeInDown').show();
        });

        // Testimonial Carousel
        $(".testimonial-carousel").owlCarousel({
            items: 3,
            loop: true,
            dots: true,
            nav: false,
            margin: 30,
            center: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 1,
                },
                900: {
                    items: 3
                }
            }
        });

        // Testimonial Carousel
        $(".client-carousel").owlCarousel({
            items: 4,
            loop: true,
            dots: false,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 4
                }
            }
        });

        // Exclusive Carousel for 4 column
        $(".exclusive-carousel.4-column").owlCarousel({
            items: 4,
            loop: true,
            dots: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 4
                }
            }
        });

        // Exclusive Carousel for 3 column
        $(".exclusive-carousel.3-column").owlCarousel({
            items: 3,
            loop: true,
            dots: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        // Exclusive Carousel for 2 column
        $(".exclusive-carousel.2-column").owlCarousel({
            items: 2,
            loop: true,
            dots: true,
            nav: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });

        // MagnificPopup
        $('#gallery').each(function() {
            $(this).magnificPopup({
                delegate: 'a.gallery-popup',
                mainClass: 'mfp-zoom-in',
                type: 'image',
                tLoading: '',
                gallery: { enabled: true },
                removalDelay: 300
            });
        });
		
		$("#expandedImg").magnificPopup({
			mainClass: 'mfp-zoom-in',
			gallery: {
				enabled: true
			},
			type: 'image'
		});	

        /* --------------------------------------
            LOAD MORE GALLERY
        -------------------------------------- */

        $(".gallery-load").slice(0, 6).show();
        $("#load-pro").click(function(e) { 
            e.preventDefault();
            $("#ti-port-load").addClass("ti-port-load-show");
            $("#ti-port-load").animate({
                    display: "block"
                }, 500,
                function() {
                    // Animation complete.
                    $(".gallery-load:hidden").slice(0, 3).slideDown(); 
                    if ($(".gallery-load:hidden").length === 0) {
                        $("#load-pro").text("No more");
                    }
                    $("#ti-port-load").removeClass("ti-port-load-show");
                }
            );

        });

        /* --------------------------------------
            Scroll UP
        -------------------------------------- */

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // Search
        var changeClass = function(name) {
            $('#search').removeAttr('class').addClass(name);
        }


        /* --------------------------------------
            Smooth Scroll
        -------------------------------------- */
        $(function() {

            var $window = $(window);
            var scrollTime = 0.5;
            var scrollDistance = 250;
            $window.on("mousewheel DOMMouseScroll", function(event) {
                event.preventDefault();
                var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
                var scrollTop = $window.scrollTop();
                var finalScroll = scrollTop - parseInt(delta * scrollDistance);
                TweenMax.to($window, scrollTime, {
                    scrollTo: { y: finalScroll, autoKill: true },
                    ease: Power1.easeOut,
                    autoKill: true,
                    overwrite: 5
                });
            });
        });





        /*------------------------------------
            Sticky Menu 
        --------------------------------------*/
        var windows = $(window);
        var stick = $(".header-sticky");
        windows.on('scroll', function() {
            var scroll = windows.scrollTop();
            if (scroll < 10) {
                stick.removeClass("sticky");
            } else {
                stick.addClass("sticky");
            }
        });

        /*------------------------------------
            Toggle Menu 
        --------------------------------------*/
        // var menuOpenBtn = $('.show-submenu');
        // var menuCloseBtn = $('.close-btn');
        // var sidebarMenu = $('.menu-bar-open');
        // menuOpenBtn.on('click', function() {
        //     sidebarMenu.css('right', '0px');
        // });
        // menuCloseBtn.on('click', function() {
        //     sidebarMenu.css('right', '-200%');
        // });

        /*------------------------------------
            jQuery MeanMenu 
        --------------------------------------*/
		setTimeout(function () {	
			$('.mobile-menu-active').meanmenu({
				meanScreenWidth: "991",
				meanMenuContainer: '.mobile-menu'
			});

			/* last  2 li child add class */
			$('ul.menu > li').slice(-2).addClass('last-elements');
		}, 200);




    });
	


    jQuery(window).on('load', function() {

		//Select nav page
		setTimeout(function () {		 
			var pathname = $(location).attr('pathname').split("/");
			pathname = pathname[pathname.length-1].split(".")[0];
			if(pathname.split("-").length>1){
				pathname = pathname.split("-")[0];
			}
			var id = "#"+pathname+"-nav";
			var page = $(id);
			page.addClass("active");
			
			// Shuffle JS
			shuffleme.init();
			
			// Sticky Nav
			$(".sticky-nav").sticky({ topSpacing: 0 });
			
		}, 600);
		
        // // Preloader
        jQuery(".preloader").fadeOut('slow');
		

    });
	
	coutItem();
	var topPosition = $("#cart-sidebar").offset().top;
	
	$(window).scroll(function() {
		var $cache = $('.fixed');
		var $main = $('#cart-sidebar');
		console.log(topPosition);
		if ($(window).scrollTop() > topPosition && (window.innerWidth>=window.innerHeight)){
		  $cache.css({
			'position': 'fixed',
			'z-index':'1',
			'width':'19%',
			'top': '120px',
			'display' : 'block'
		  });
		  $main.css({'display' : 'none'});
		}
		else{
		  $cache.css({
			'position': 'relative',
			'z-index':'0',
			'width':'100%',
			'top': 'auto',
			'display' : 'none',
			'visibility':'visible'
		  });
		  $main.css({'display' : 'block'});
		}
	});

}(jQuery));


		
function openImg(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  

	$("#expandedImg").magnificPopup({
		items: { 
			src: imgs.src
		},
		mainClass: 'mfp-zoom-in',
		gallery: {
			enabled: true
		},
		type: 'image'
	});	
  
}

function removeItem(binIcon){
	var cartCard = $( binIcon).closest( "article" );
	cartCard.remove();
	coutItem();
}

function coutItem(){
	var cout = 0;
	$("input.count-number").each(function(){
		var num = parseInt($(this).val());
		cout = cout + num;	
	});
	$("#sum-item").html(cout);
	$("#count-item").html(cout);
}