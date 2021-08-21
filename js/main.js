(function($) {
	"use strict";
	new WOW().init();
	setTimeout(function() {
		$(".inner div").addClass("done");
		setTimeout(function() {
			$(".inner div").addClass("page");
			setTimeout(function() {
				$(".pageLoad").addClass("off");
				$("body, html").addClass("on");
			}, 500);
		}, 500);
	}, 1500);
	$('body').on('mouseenter mouseleave', '.dropdown-hover', function (e) {
		var dropdown = $(e.target).closest('.dropdown-hover');
		dropdown.addClass('show');

		setTimeout(function () {
			dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
		}, 300);
	});
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			if (target.length) {
				$("html, body").animate(
					{
						scrollTop: target.offset().top - 56
					},
					1000,
					"easeInOutExpo"
				);
				return false;
			}
		}
	});
	$(".js-scroll-trigger").click(function() {
		$(".navbar-collapse").collapse("hide");
	});
	$("body").scrollspy({
		target: "#mainNavbar",
		offset: 57
	});
	var navbarCollapse = function() {
		if ($("#mainNavbar").offset().top > 100) {
			$("#mainNavbar").addClass("navbar-shrink");
		} else {
			$("#mainNavbar").removeClass("navbar-shrink");
		}
	};
	navbarCollapse();
	$(window).scroll(navbarCollapse);
	$("#customersCarousel").owlCarousel({
    nav: false,
		dots: false,
		rtl: false,
		loop: true,
		dots: false,
		responsive: {
			0: {
        items: 1,
        autoplay: true,
        autoplaySpeed: 900,
        autoplayHoverPause: false,
			},
			380: {
				items: 2
			},
			580: {
				items: 3
			},
			992: {
				items: 4
			},
			1170: {
        items: 7,
        autoplay: false,
        autoplaySpeed: 300,
        autoplayHoverPause: false,
			}
		}
  });
  $("#agriculturalCarousel").owlCarousel({
    nav: false,
		dots: false,
		rtl: false,
		loop: true,
		dots: false,
		margin: 5,
		responsive: {
			0: {
        items: 4,
        autoplay: true,
        autoplaySpeed: 900,
        autoplayHoverPause: false,
			},
			1170: {
        items: 7,
        autoplay: false,
        autoplaySpeed: 300,
        autoplayHoverPause: false,
			}
		}
	});
	$("#oilCarousel").owlCarousel({
    nav: false,
		dots: false,
		rtl: false,
		loop: true,
		dots: false,
		margin: 5,
		responsive: {
			0: {
        items: 3,
        autoplay: true,
        autoplaySpeed: 900,
        autoplayHoverPause: false,
			},
			768: {
				items: 4,
			},
			992: {
				items: 4,
			},
			1170: {
        items: 6,
        autoplay: false,
        autoplaySpeed: 300,
        autoplayHoverPause: false,
			}
		}
	});
})(jQuery);
