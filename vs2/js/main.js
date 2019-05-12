$('.holder').fadeIn();
$(document).ready(function() {
	///////////////preloader
	$('.holder').remove();
	///////////////scrollTop
	$('.scroll-top').click(function() {
		$('html, body')
			.stop()
			.animate({ scrollTop: 0 }, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height() - 300) {
			$('.scroll-top').addClass('active');
		} else {
			$('.scroll-top').removeClass('active');
		}
	});

	///////////////////zoom -images
	function mountZoomImage(image, width, height, target) {
		target.prepend('<div class="zoom"><div class="zoom_image"></div></div>');
		$('div.zoom_image').css({
			width: width,
			height: height,
			'background-image': 'url(' + image + ')',
		});
	}

	function unmountZoomImage() {
		$('div.zoom').remove();
	}

	function zoomImage(zoom) {
		$('div.zoom_image').css({
			transform: 'scale(' + zoom + ')',
			'margin-top': '50px',
		});
	}

	function panZoomImage(x, y, target) {
		var transformX = (x / (target.width() - 100)) * 100 + '%';
		var transformY = (y / (target.height() - 50)) * 100 + '%';

		target.css({ 'transform-origin': transformX + ' ' + transformY });
	}

	$('div.standard').mousemove(function(event) {
		var $zoomTarget = $('div.zoom_image');
		var x = event.pageX - $(this).offset().left;
		var y = event.pageY - $(this).offset().top;
		panZoomImage(x, y, $zoomTarget);
	});

	$('div.standard').mouseover(function() {
		var $zoomParent = $('div.copy');
		var image = $(this)
			.find('img')
			.attr('src');
		var imageWidth = $(this)
			.find('img')
			.width();
		var imageHeight = $(this)
			.find('img')
			.height();
		var zoomAmount = $(this).attr('data-zoom');

		$(this).css({ cursor: 'zoom-in' });
		mountZoomImage(image, imageWidth, imageHeight, $zoomParent);
		zoomImage(zoomAmount);
	});

	$('div.standard').mouseout(function() {
		unmountZoomImage();
	});

	///////////////nav sticky product details

	$(function() {
		var menuTimeLine = $('.menu-maps').offset().top;
		$(window).scroll(function() {

			var winTop = $(window).scrollTop();
			if (winTop > menuTimeLine) {
				$('.menu-maps').addClass('is-fixed');
			} else {
				$('.menu-maps').removeClass('is-fixed');
			}
		});
	});
	///////////////////nav 
	$(function() {
		var menuTop = $('.nav-menu-mobile-top').offset().top;
		$(window).scroll(function() {

			var winTop = $(window).scrollTop();
			if (winTop > menuTop) {
				$('.nav-menu-mobile-top').addClass('is-fixed');
			} else {
				$('.nav-menu-mobile-top').removeClass('is-fixed');
			}
		});
	});
	/////////////nav sticky product details

	$(function() {
		var menu = $('.menu-product').offset().top;
		$(window).scroll(function() {

			var winTop = $(window).scrollTop();
			if (winTop > menu) {
				$('.menu-product').addClass('is-fixed');
			} else {
				$('.menu-product').removeClass('is-fixed');
			}
		});
	});
	//////////////////smooth scroll product details
	$(function() {
		$('.nav-menu-product > li > a').click(function() {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top - 100,
						},
						1000
					);
					$('.nav-menu-product > li > a').removeClass('active');
					$(this).addClass('active');
					return false;
				}
			}
		});
	});

	///////////////////////// smooth scroll abouts
	$(function() {
		$('.nav-menu-maps > li > a').click(function() {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top,
						},
						1000
					);
					$('.nav-menu-maps > li > a').removeClass('active');
					$(this).addClass('active');
					return false;
				}
			}
		});
	});

	//////////////////////////
	$(function() {
		var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
		$('.nav-link').each(function() {
			if (this.href === path) {
				$(this).addClass('active');
			}
		});
	});
	var heightFooter = $('.main-footer').outerHeight();
	var menuMobile = $('.menu-mobile').outerHeight();
	var heightMenu = $('.has-child-menu').height(function(inđex,curr){
		return $(this).outerHeight() - heightFooter;
	  });
	var hMM = $('.menu-mobile.active').height(function(index, curr) {
		return $(this).outerHeight() - heightFooter;
	});;
	var hcMM = $('.child-menu-mobile.active').height()(function(i,curr){
		return (this).outerHeight() - heightFooter;
	})
	///////////////////menu-mobile
	$('.icon-bar').on('click',function(){
		$(this).toggleClass('active');
		
	})
});

$(window).on('load', function() {
	setTimeout(function() {
		$('.hot-ads').fadeIn('slow');
	}, 3000);
	///////////////close-btn
	$('.btn-close').click(function() {
		$('.hot-ads').fadeOut(800);
	});
	$('.hot-ads').on('click', function(e) {
		$('.btn-close').trigger('click');
	});
});

/// click toggle Menu
$(document).ready(function() {
	$('.nav-main-menu li a ').click(function() {
		$(this)
			.parent()
			.siblings()
			.find('.has-child-menu')
			.removeClass('active');
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this)
				.parent()
				.children('.has-child-menu')
				.removeClass('active');
			$('.main').removeClass('change');
		} else {
			$('li a.active').removeClass('active');
			$(this).addClass('active');
			$(this)
				.parent()
				.children('.has-child-menu')
				.addClass('active');
			$('.main').addClass('change');
		}
  });
});
///////menu mobile
$(document).ready(function() {
	$('.icon-bar').on('click',function(){
		$('.menu-mobile').toggleClass('active');
	})
	$('.nav-menu-mobile li a ').click(function() {
		$(this)
			.parent()
			.siblings()
			.find('.child-menu-mobile')
			.removeClass('active');
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this)
				.parent()
				.children('.child-menu-mobile')
				.removeClass('active');
		} else {
			$('li.active').removeClass('active');
			$(this).addClass('active');
			$(this)
				.parent()
				.children('.child-menu-mobile')
				.addClass('active');
		}
  });
});