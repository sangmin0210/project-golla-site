$(document).ready(function() {
    $(".heart1").click(function() {
        $(this).siblings(".heart2").stop().show();
    });
    $(".heart2").click(function() {
        $(this).stop().hide();
    });


    var idx = 0;
    var interval;
    mainSlide();
    
    function mainSlide() {
      interval = setInterval(function() {
        $(".slide-list").eq(idx).animate({left: "-100%"}, 800).animate({left: "100%"}, 0);
        idx==3?idx=0:idx++;
        $(".slide-list").eq(idx).animate({left: 0}, 800);
      }, 4000)
    }
    

    $(".ani_list").click(function() {
      var index = $(this).index();
      $('.ani').eq(index).fadeIn(600).siblings('.ani').fadeOut();
      clearInterval(interval);
      $(".slide-list").css({display: "none"});
      $("#mainAni").show(); 
      $(".slideBtn").show();
    })
    
    
    $(".slideBtn").click(function() {
      $("#mainAni").hide();
      $(".slide-list").css({display: "block"});
      mainSlide();
    })

    $(".swiper-slide").hover(function() {
      $(".title-box", this).stop().fadeIn();
    }, function() {
      $(".title-box", this).stop().hide();
    })




    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      },
    });
})