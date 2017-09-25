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

      e.preventDefault();
      var info = $(this).find('.infoRef').attr('title');
      var screenframe = $(this).find('.screenRef').attr('title');
      $('.part').removeClass( 'rotate' );
      $(this).find('.part').addClass('rotate');
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.machine').addClass('shake').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
            $(this).removeClass('shake');
        });
       var isMobile = window.matchMedia("(max-width: 768px)").matches
       if (isMobile){
          $('.start-screen').show();
          $('.text-container').fadeIn(500);
          $('body').addClass('modal-open');
          $(info).show();
          $('.screen-mobile').show();
      }else{
          $('.screen-mobile').hide();
            $(screenframe).fadeIn(500).show().addClass('active-screen');
            $(info).fadeIn(500).show().addClass('active-fact');
      }
   });

   $('.valve4').click(function(e){
      bellySlides();
      mobileSlides();
   })

   $('.close-fact').click(function(e) {
      $('.text-container').fadeOut(500);
      $(this).closest('.single-fact-container').hide();
      $('body').removeClass('modal-open');
   });

    window.onresize = function() {
      console.log($(window).width())
        if ($(window).width() < 769)
            $('.text-container').hide();
        else
            $('.text-container').show();
        $('body').removeClass('modal-open');
        $('.single-fact-container').hide();
        $('.part').removeClass( 'rotate' );
        $('.screen-mobile').hide();
    }

   function load() {
      if (loading) {
         setTimeout(load, 100);
      } else {
         render();
      }
   }



});


function bellySlides() {
    var allSlides = $('#screen4 .fact4slides');
    var $activeSlide = allSlides.eq(0);
    $activeSlide.show();
    var $next = $activeSlide.next();
    var timer = setInterval(function() {
        $next.fadeIn(2000);
        $activeSlide.hide();
        $activeSlide = $next;
        console.log(allSlides.last().index());
        $next = (allSlides.last().index() == allSlides.index($activeSlide)) ?
            $next = allSlides.eq(0):$activeSlide.next();

    }, 2000);
}


function mobileSlides() {
    var allSlides = $('#screen-mobile-4 .fact-screen-mobile4');
    var $activeSlide = allSlides.eq(0);
    $activeSlide.show();
    var $next = $activeSlide.next();
    var timer = setInterval(function() {
        $next.fadeIn(2000);
        $activeSlide.hide();
        $activeSlide = $next;
        console.log(allSlides.last().index());
        $next = (allSlides.last().index() == allSlides.index($activeSlide)) ?
            $next = allSlides.eq(0):$activeSlide.next();

    }, 2000);
}
