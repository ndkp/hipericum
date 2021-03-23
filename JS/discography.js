$(function(){
    // モーダル表示
    $('#js-modal-show01').click(function(){
        $('#cd-modal01').fadeIn();
      });
    
    // 閉じるボタンクリックでモーダル非表示
      $('.close-modal').click(function(){
        $('#cd-modal01').fadeOut();
       // $('#cd-modal02').fadeOut();
       // $('#cd-modal03').fadeOut();
      });
      
    });