$(document).ready(function () {  
  var top = $('#menu-bar').offset().top - parseFloat($('#menu-bar').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
  
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#menu-bar').addClass('fixed');
    } else {
      // otherwise remove it
      $('#menu-bar').removeClass('fixed');
    }
  });
});