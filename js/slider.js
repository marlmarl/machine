

$('.slider').each(function() {
  var $this   = $(this);
  var $group  = $this.find('.slide-viewer');
  var timeout;     //needed?

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


    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
    $group.animate( {left: animateLeft}, function() {
      $slides.eq(currentIndex).css( {display: 'none'} );
      $slides.eq(newIndex).css( {left: 0} );
      $group.css( {left: 0} );
    changeActiveClasses(newIndex);

    });

  }


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
        swipe:function(event, direction, distance, duration, fingerCount){
            buttonArray[currentIndex].removeClass('active');
            if (direction === "left"){
                if (currentIndex < ($slides.length - 1)) {
                    move(currentIndex + 1);
                } else {
                    move(0);
                }
            }
            if (direction === "right"){
                if (currentIndex > 0) {
                    move(currentIndex - 1);
                } else {
                    move($slides.length - 1);
                }
            }
        },
        threshold:100
    });

});
