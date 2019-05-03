$(document).ready(function() {

	//slideshow
	var swiper = new Swiper('.sw-slideshow', {
		speed:1000,
		centeredSlides: true,
		parallax:true,
		autoplay: {
		  delay: 4000,
		  disableOnInteraction: false,
		},
		watchOverflow:true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//////blogs-home
	var swiper = new Swiper('.sw-blogs', {
		slidesPerView: 2,
		spaceBetween: 30,
		freeMode: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.next-blogs',
			prevEl: '.prev-blogs',
		}
		});
		////////slides-banner
		var swiper = new Swiper('.sw-slides-banner', {
			speed:1000,
			centeredSlides: true,
			parallax:true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			watchOverflow:true,
			pagination: {
				el: '.swiper-pagination',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.next-banner',
				prevEl: '.prev-banner',
			}
			});
});
