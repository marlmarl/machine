var currentIndex = 0;
var clicked = 0;
var runSlides = false;
var $slides = $('.single-fact-container');
var buttonArray = [];

function changeActiveClasses(newIndex) {
   buttonArray[currentIndex].removeClass('active');
   buttonArray[newIndex].addClass('active');
   $slides.eq(currentIndex).removeClass('active-fact');
   $slides.eq(newIndex).addClass('active-fact');
   $('.valvePart').removeClass('rotate');
   $('.valvePart').eq(newIndex).addClass('rotate');
    if (newIndex == 3){
        if (!runSlides) {
            bellySlides($('#screen4 .fact4slides'));
            bellySlides($('#screen4-mobile .fact4-screen'));
            runSlides = true;
        }
    }
   currentIndex = newIndex;
}

function bellySlides(allSlides) {
   var $activeSlide = allSlides.eq(0);
   $activeSlide.show();
   var $next = $activeSlide.next();
   var timer = setInterval(function() {
      $next.fadeIn(2000);
      $activeSlide.hide();
      $activeSlide = $next;
      $next = (allSlides.last().index() == allSlides.index($activeSlide)) ?
         $next = allSlides.eq(0) : $activeSlide.next();
   }, 1500);
}

$(document).ready(function() {

   $('.valve').click(function(e) {
      e.preventDefault();
      $(".valve1").removeClass('pulse');
      if (clicked < 1) {
         $('.top-valve').addClass('pop');
         renderSmoke();
         $('.indicator1-img').addClass('rotate225');
         $('.indicator2-img').addClass('rotate180');
         setTimeout(function(){
            $('.indicator1-img').removeClass('rotate225');
            $('.indicator2-img').removeClass('rotate180');
            $('.indicator1-img').addClass('indicator1-move');
            $('.indicator2-img').addClass('indicator2-move');

         }, 900);
      }
      clicked = 1;
      e.preventDefault();
      var info = $(this).find('.infoRef').attr('title');
      var screenframe = $(this).find('.screenRef').attr('title');
      $(this).find('.part').addClass('rotate');
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.machine').addClass('shake').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
         $(this).removeClass('shake');
      });

      changeActiveClasses($(info).index());
      var isMobile = window.matchMedia("(max-width: 768px)").matches
      if (isMobile) {
         $('.start-screen').show();
         $('.text-container').fadeIn(500);
         $('body').css('height', window.innerHeight);
         $('.single-fact-container').hide();
         $(info).show();
         $('.screen-mobile').show();

      } else {
         $('.text-container').css('display', 'block');
         $('.screen-mobile').hide();
         $(screenframe).fadeIn(500).show().addClass('active-screen');
         $(info).fadeIn(500);
      }
   });

   $('.close-fact').click(function(e) {
      $('.text-container').fadeOut(500);
      $(this).closest('.single-fact-container').hide();
      $('body').css('height', '100%');
   });

   window.onresize = function() {
      if ($(window).width() > 768) {
         $('body').css('height', '100%');
         $('.text-container').show();
         $('.screen-mobile').hide();
         $('.fact-screen').hide();
         if (clicked == 1) {
            $('.active-screen').hide();
            $('.fact-screen').eq(currentIndex).addClass('active-screen').show();
         }
      } else {
         $('body').css('height', window.innerHeight);
         $('.screen-mobile').show();
      }
   }
});
