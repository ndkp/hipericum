$(function(){
    // モーダル表示
    $('#sp-ririka').click(function(){
        $('#modal-ririka').fadeIn();
      });

    $('#sp-nodoka').click(function(){
        $('#modal-nodoka').fadeIn();
      });
      
    $('#sp-anna').click(function(){
        $('#modal-anna').fadeIn();
      });

    
    // 閉じるボタンクリックでモーダル非表示
      $('.close-modal').click(function(){
        $('.profile-modal-wrapper').fadeOut();
      });
      
    });