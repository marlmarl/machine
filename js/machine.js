var currentIndex = 0;

$(document).ready(function() {
   var clicked = 0;

   $('.valve').click(function(e) {
      e.preventDefault();
      $('.top-valve').hide();
      if (clicked < 1) {
         render();
      }
      clicked = 1;
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
        currentIndex =  $(info).index();
       var isMobile = window.matchMedia("(max-width: 768px)").matches
       if (isMobile){
          $('.start-screen').show();
          $('.text-container').fadeIn(500);
          $('body').addClass('modal-open');
          $('.single-fact-container').hide().removeClass('active-fact');
          $(info).show().addClass('active-fact');
          $('.screen-mobile').show();

      }else{
          $('.screen-mobile').hide();
            $(screenframe).fadeIn(500).show().addClass('active-screen');
            $(info).fadeIn(500).show().addClass('active-fact');
      }
   });

   $('.close-fact').click(function(e) {
      $('.text-container').fadeOut(500);
      $(this).closest('.single-fact-container').hide();
      $('body').removeClass('modal-open');
   });

    $('.valve4').click(function(e){
      bellySlides();
   })

    window.onresize = function() {
      if ($(window).width() > 768){
         $('body').removeClass('modal-open');
         $('.screen-mobile').hide();
      }else{
         $('.screen-mobile').show();
      }
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
