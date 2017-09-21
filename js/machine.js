$(document).ready(function() {
   var clicked = 0;

   $('.valve').click(function(e) {
      e.preventDefault();
      $('.top-valve').hide();
      if (clicked < 1) {
         render();
      }
      clicked = 1;
   });

   $('.valve').click(function(e) {
      var info = $(this).find('.infoRef').attr('href');
      var screen = $(this).find('.screenRef').attr('href');
      e.preventDefault();
      $('.part').removeClass( 'rotate' );
      $(this).find('.part').addClass('rotate');
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.machine').addClass('shake').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            $(this).removeClass( 'shake' );
        });
       if (window.matchMedia('(max-width: 767px)').matches){
          $('.facts').css("display","flex");
          $(info).show();
          $('.screen-mobile').show();
          $('.fact-screen-mobile').show();
      }else{
            $(screen).fadeIn(500).show().addClass('active-screen');
            $(info).fadeIn(500).show().addClass('active-fact');
      }
   });

   $('.close-fact').click(function(e) {
      $('.facts').hide();
      $(this).closest('.single-fact').hide();
   });

   function load() {
      if (loading) {
         setTimeout(load, 100);
      } else {
         render();
      }
   }

});
