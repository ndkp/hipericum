$(function () {
  $('.js-open').click(function () {
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    $('#overlay, .modal-window[data-id="modal' + id + '"]').fadeIn();
  });

  // オーバーレイクリックでもモーダルを閉じるように
  $('.js-close , #overlay').click(function () {
    $('#overlay, .modal-window').fadeOut();
  });
});
