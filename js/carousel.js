$(document).ready(function() {
	//slideshow
	var swiper = new Swiper('.sw-slideshow', {
		speed: 1000,
		centeredSlides: true,
		parallax: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		watchOverflow: true,
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
		},
	});
	////////slides-banner
	var swiper = new Swiper('.sw-slides-banner', {
		speed: 1000,
		centeredSlides: true,
		parallax: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		watchOverflow: true,
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
		},
	});
	//////////ngoại thất
	var swiper = new Swiper('.sw-exterior', {
		slidesPerView: 2,
		slidesPerColumn: 2,
		spaceBetween: 30,
		pagination: {
		  el: '.sw-pagi-exterior',
		  clickable: true,
		},
	  });

	///////// nội thất
    var galleryThumbs = new Swiper('.gallery-thumbs-furniture', {
		slidesPerView: 3,
		spaceBetween: 30,
		freeMode: false,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	  });
	  var galleryTop = new Swiper('.gallery-top-furniture', {
		spaceBetween: 10,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
		  nextEl: '.sw-button-next-furniture',
		  prevEl: '.sw-button-prev-furniture',
		},
		pagination: {
			el: '.sw-pagi-furniture',
			clickable: true,
		  },
		thumbs: {
		  swiper: galleryThumbs,
		},
	  });

	  //////màu sắc
	  var swiper = new Swiper('.sw-color', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: false,
        pagination: {
          el: '.sw-pagi-color',
          clickable: true,
        },
	});
	
	//////////thùng xe
	var galleryThumbs = new Swiper('.gallery-thumbs-container', {
		slidesPerView: 3,
		spaceBetween: 30,
		freeMode: false,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	  });
	  var galleryTop = new Swiper('.gallery-top-container', {
		spaceBetween: 10,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
		  nextEl: '.next-container',
		  prevEl: '.prev-container',
		},
		pagination: {
			el: '.sw-pagi-container',
			clickable: true,
		  },
		thumbs: {
		  swiper: galleryThumbs,
		},
	  });


	  ///////////////// khung gầm
	  var galleryThumbs = new Swiper('.gallery-thumbs-chassis', {
		slidesPerView: 3,
		spaceBetween: 30,
		freeMode: false,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	  });
	  var galleryTop = new Swiper('.gallery-top-chassis', {
		spaceBetween: 10,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
		  nextEl: '.next-chassis',
		  prevEl: '.prev-chassis',
		},
		pagination: {
			el: '.sw-pagi-chassis',
			clickable: true,
		  },
		thumbs: {
		  swiper: galleryThumbs,
		},
	  });

});
