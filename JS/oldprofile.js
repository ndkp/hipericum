$(function() {
  
    function toggleChangeBtn() {
      var slideIndex = $('.carousel-list').index($('.active'));
      $('.arrow-btn').show();
      if (slideIndex == 0) {
        $('.js-btn-prev').hide();
      } else if (slideIndex == $('.carousel-list').length-1) {
        $('.js-btn-next').hide();
      }
    }
    
    $('.roundprofile').click(function() {
      $('.active').removeClass('active');
      var clickedIndex = $('.roundprofile').index($(this));
      $('.carousel-list').eq(clickedIndex).addClass('active');
      toggleChangeBtn();
    });
    
    $('.arrow-btn').click(function() {
      var $displaySlide = $('.active');
      $displaySlide.removeClass('active');
      if ($(this).hasClass('js-btn-next')) {
        $displaySlide.next().addClass('active');
      } else {
        $displaySlide.prev().addClass('active');
      }
      toggleChangeBtn();
    });
  });
  