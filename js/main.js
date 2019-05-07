$(".holder").fadeIn();
$(document).ready(function(){
  /////////////////menu-sidebar
  // var menu = $('.nav-main-menu > li.nav-item > a.nav-link');
  // $(".nav-main-menu > li > a[href*=#]").click(function() {
  //   if ($(this).parent().hasClass("active")) {
  //     $(this).parent().removeClass("active");
  //     $(this).parent().children('.has-child-menu').removeClass('active');
  //     $('.main,.main-footer').removeClass('change');
  //   } else {
  //     $(this).toggleClass("active");
  //     $(this).next(".has-child-menu").toggleClass('active');
  //     $(this).parent(".has-child-menu").toggleClass('active');
  //     $(this).parent().removeClass('active');
  //     $('.main,.main-footer').toggleClass('change');
  //   }
  // });
  ///////////////preloader
  $(".holder").remove();
  ///////////////scrollTop
  $('.scroll-top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()-300) {
      $('.scroll-top').addClass("active");
    } else {
      $('.scroll-top').removeClass("active");
    };
  });

  ///////////////////zoom -images
  function mountZoomImage(image, width, height, target) {
    target.prepend('<div class="zoom"><div class="zoom_image"></div></div>');
    $('div.zoom_image').css({
      'width': width,
      'height': height,
      'background-image': 'url(' + image + ')'
    });
  }
  
  function unmountZoomImage() {
    $('div.zoom').remove();
  };
  
  function zoomImage(zoom) {
    $('div.zoom_image').css({
      'transform': 'scale(' + zoom + ')',
      'margin-top': '50px'
    });
  };
  
  function panZoomImage(x, y, target) {
    var transformX = (x / (target.width() - 100) * 100) + '%';
    var transformY = (y / (target.height() - 50) * 100) +'%';
    
    target.css({'transform-origin': transformX + ' ' + transformY});
  };
  
  $('div.standard').mousemove(function(event) {
    var $zoomTarget = $('div.zoom_image');
    var x = event.pageX - $(this).offset().left;
    var y = event.pageY - $(this).offset().top;
    panZoomImage(x, y, $zoomTarget);
  });
  
  $('div.standard').mouseover(function() {
    var $zoomParent = $('div.copy');
    var image = $(this).find('img').attr('src');
    var imageWidth = $(this).find('img').width();
    var imageHeight = $(this).find('img').height();
    var zoomAmount = $(this).attr('data-zoom');
    
    $(this).css({'cursor': 'zoom-in'});
    mountZoomImage(image, imageWidth, imageHeight, $zoomParent);
    zoomImage(zoomAmount);
  });
  
  $('div.standard').mouseout(function() {
    unmountZoomImage();
  });

    ///////////////nav sticky
    var menu = $('.menu-product').offset().top;
    $(function() {
      $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop > menu) {
          $('.menu-product').addClass("is-fixed");
        } else {
          $('.menu-product').removeClass("is-fixed");
        }
      })
    });
    //////////////////smooth scroll
    $(function() {
      $('.nav-menu-product > li > a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
                    $(".nav-menu-product > li > a").removeClass("active");
            $(this).addClass("active");
            return false;
          }
        }
      });
      $(window).scroll(function(){
        $("body").each(function(){
          if(ScrollView($(this))){
            var id = $(this).attr("id");
            $(".nav-menu-product > li > a").removeClass("active");
            $(".nav-menu-product > li > a[href='#" + id + "']").addClass("active");
          }
        });
      });
      function ScrollView(element){
        var win = $(window);
        var winTop = win.scrollTop();
        var winBottom = winTop + win.height();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();
    
        if((elementBottom <= winBottom) && (elementTop >= winTop)){
          return true;
        }
        return false;
      }
    });

    //////////////////////////
    $(function () {
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
      $('.nav-link').each(function () {
          if (this.href === path) {
              $(this).addClass('active');
          }
      });

  });


 
});

$(window).on('load',function(){
  setTimeout(function(){
    $('.hot-ads').fadeIn("slow");
  },2000);
    ///////////////close-btn
$('.btn-close').click(function(){
  $('.hot-ads').fadeOut(800);
});
})

































$(document).ready(function () {
    $('.nav-main-menu li a').click(function () {
      $(this).parent().siblings().find('.has-child-menu').removeClass('active');
      if($(this).parent().children('.has-child-menu')){
        $(this).parent().children('.has-child-menu').toggleClass('active');
        $(this).prev().parents().children().removeClass('active');
      }
      var checked = document.querySelectorAll('.has-child-menu');
      if(checked.hasClass('active')){
        $('.main,.main-footer').addClass('change');
      }
      else{
        $('.main,.main-footer').removeClass('change');
      }
    });


});