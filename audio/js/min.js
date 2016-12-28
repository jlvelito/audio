$(document).ready(function() {

  // var myTime = 0;
  //
  // $('.audioCreate').on('click', function() {
  //   var file = $(this).data('audio')
  //   mySound = new Audio(file);
  // });
  //
  // $('.audioPlay').on('click', function() {
  //   mySound.play();
  // });
  //
  // $('.audioPause').on('click', function() {
  //   mySound.pause();
  // });
  //
  // $('.audioStop').on('click', function() {
  //   mySound.currentTime = 0;
  //   mySound.pause();
  // });


  $('#initial__animation').shuffleLetters({
    callback: function() {
      $('#initial').addClass('active');
    }
  });

});
