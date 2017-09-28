$(document).ready(function() {
    var currentIndex = 0;
    var clicked = false;
    var runSlides = false;
    var $group = $('.slide-viewer').first();
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
        if (newIndex == 0){
            $(".arrow-left").css('visibility', 'hidden');
        }
        else {
            $(".arrow-left").css('visibility', 'visible');
        }
        if (newIndex == 5){
            $(".arrow-right").css('visibility', 'hidden');
         }
         else {
            $(".arrow-right").css('visibility', 'visible');
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
    
    function move(newIndex) {
          var animateLeft, slideLeft;

          if ($group.is(':animated') || currentIndex === newIndex) {
             return;
          }

          if (newIndex > currentIndex) {
             slideLeft = '100%';
             animateLeft = '-100%';
          } else {
             slideLeft = '-100%';
             animateLeft = '100%';
          }

          $slides.eq(newIndex).css({
             left: slideLeft,
             display: 'block'
          });
          $group.animate({
             left: animateLeft
          }, function() {
             $slides.eq(currentIndex).css({
                display: 'none'
             });
             $slides.eq(newIndex).css({
                left: 0
             });
             $group.css({
                left: 0
             });
             changeActiveClasses(newIndex);
          });
       }

   $('.valve').click(function(e) {
      e.preventDefault();
      var info = $(this).find('.infoRef').attr('title');
      var screenframe = $(this).find('.screenRef').attr('title');
      var isMobile = window.matchMedia("(max-width: 768px)").matches
      
      $(".valve1").removeClass('pulse');
      $(this).find('.part').addClass('rotate');
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.machine').addClass('shake').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
         $(this).removeClass('shake');
      });
      changeActiveClasses($(info).index());
      if (isMobile) {
         $('.start-screen').show();
         $('.text-container').fadeIn(500);
         $('.screen-mobile').show();
         $('body').css('height', window.innerHeight);
         $('.single-fact-container').hide();
         $(info).show();
      } else {
         $('.text-container').css('display', 'block');
         $('.screen-mobile').hide();
         $(screenframe).fadeIn(500).show().addClass('active-screen');
         $(info).fadeIn(500);
      }
      if (!clicked) {
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
      clicked = true;
   });

   $('.close-fact').click(function(e) {
      $('.text-container').fadeOut(500);
      $(this).closest('.single-fact-container').hide();
      $('body').css('height', '100%');
   });
  
   $.each($slides, function(index) {
          var $button = $('<button type="button" class="slide-btn">&bull;</button>');
          if (index === currentIndex) {
             $button.addClass('active');
          }
          $button.on('click', function() {
             move(index);
          }).appendTo('.slide-buttons');
          buttonArray.push($button);
   });

   $('.single-fact-container').swipe({
          swipe: function(event, direction, distance, duration, fingerCount) {
             if (direction === "left") {
                if ((window.matchMedia("(max-width: 768px)").matches) && (currentIndex < ($slides.length-1))){
                   move(currentIndex + 1);
                }
             }
             if ((window.matchMedia("(max-width: 768px)").matches) && (direction === "right")) {
                if (currentIndex > 0) {
                   move(currentIndex - 1);
                }
             }
          },
          threshold: 100,
          allowPageScroll:"auto"
   });

   $('.arrow-right').click(function(e) {
          if (currentIndex < ($slides.length-1)){
             move(currentIndex + 1);
          }
       });

   $('.arrow-left').click(function(e) {
          if (currentIndex > 0) {
             move(currentIndex - 1);
          }
    });
    
    window.onresize = function() {
      if ($(window).width() > 768) {
         $('body').css('height', '100%');
         $('.text-container').show();
         $('.screen-mobile').hide();
         $('.fact-screen').hide();
         if (clicked) {
            $('.active-screen').hide();
            $('.fact-screen').eq(currentIndex).addClass('active-screen').show();
         }
      } else {
         $('body').css('height', window.innerHeight);
         $('.screen-mobile').show();
      }
   }
});
