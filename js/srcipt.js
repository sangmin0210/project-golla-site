$(document).ready(function () {
    $('#mini-box>li').click(function (e) { 
        e.preventDefault();
        var index = $(this).index(); //클릭된 li의 인데스 번호를 구한다.
        $('.wrap-box').eq(index).css({display: 'flex', opacity: 0}).animate({opacity: 1}).siblings('.wrap-box').hide();
    });
});