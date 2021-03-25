
$(function() {
    $('#slider').slick({
         asNavFor: '.slide-dots' //サムネイルのクラス名
    });
    $('.slide-dots').slick({
         arrows: false,
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         asNavFor: '#slider', //スライダー本体のクラス名
         focusOnSelect: true,
    });
});
