$(document).ready(function() {
    $(".heart1").click(function() {
        $(this).siblings(".heart2").stop().show();
    });
    $(".heart2").click(function() {
        $(this).stop().hide();
    });

    $(".ani_list").click(function() {
        var index = $(this).index();
        $('.ani').eq(index).fadeIn(600).siblings('.ani').fadeOut();
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
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
    });
})