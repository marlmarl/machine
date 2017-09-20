$(document).ready(function() {
   var clicked = 0;

   $('.valve').click(function(e){
      e.preventDefault();
      $('.top-valve').hide();
      if(clicked<1){
         render();
      }
      clicked = 1;
      //$('#main-nav').css("display", "flex");
   });

   $('.valve1').click(function(e){
      e.preventDefault();
      $('.machine').removeClass('shake');
      $('.valve1 img').addClass('rotate');
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.machine').addClass('shake');
      $('.fact1-screen').fadeIn(2000).show().addClass('active-screen');
      $('.fact1').fadeIn(2000).show().addClass('active-fact');

   });

   $('.valve2').click(function(e){
      e.preventDefault();
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.fact2-screen').show().addClass('active-screen');
      $('.fact2').show().addClass('active-fact');
   });

   $('.valve3').click(function(e){
      e.preventDefault();
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.fact3-screen').show().addClass('active-screen');
      $('.fact3').show().addClass('active-fact');

   });

   $('.valve4').click(function(e){
      e.preventDefault();
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.fact4-screen').show().addClass('active-screen');
      $('.fact4').show().addClass('active-fact');

   });

   $('.valve5').click(function(e){
      e.preventDefault();
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.fact5-screen').show().addClass('active-screen');
      $('.fact5').show().addClass('active-fact');

   });

   $('.valve6').click(function(e){
      e.preventDefault();
      $('.active-fact').hide();
      $('.active-screen').hide();
      $('.fact6-screen').show().addClass('active-screen');
      $('.fact6').show().addClass('active-fact');

   });







   });

   /*$(document).ready(function() {

   $('.valve').click(function(e){
   e.preventDefault();
   $('.top-valve').hide();
   render();
   //$('#main-nav').css("display", "flex");
});


});*/


function load(){
   if(loading){
      setTimeout(load, 100);
   }else{
      render();
   }
}
