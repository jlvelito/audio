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

  var height = $(window).height();

  $(window).scroll(function() {
    var way = $(window).scrollTop();
    if (way >= height) {
      $('header').addClass('visible');
    } else {
      $('header').removeClass('visible');
    }
  });

  var mySoundInit = new Audio('files/flick.wav');


  $('#initial__animation').shuffleLetters({
    callback: function() {
      $('#initial').addClass('active');
      mySoundInit.play();
    }
  });

  if ($('.container__svg').length) {
    var svg4 = new Walkway({
      selector: '#animation',
      duration: 2500
    }).draw();
  };



  $('.container__svg').on('click', function() {
    mySoundInit.play();
    // $('.initial__contents, .wire-wrapper, .wire-wrapper-2, .background')
    //   .addClass(
    //     'white');
  });

});

// $(window).load(function() {
//   setTimeout(function() {
//     // Hide the address bar!
//     $("html, body").animate({
//       scrollTop: 100
//     }, 10);
//   }, 0);
// });
