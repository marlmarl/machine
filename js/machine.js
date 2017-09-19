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
      $('.active-fact').hide();
      e.preventDefault();
      $('.fact1').show().addClass('active-fact');
   });

   $('.valve2').click(function(e){
      $('.active-fact').hide();
      e.preventDefault();
      $('.fact2').show().addClass('active-fact');
   });

   $('.valve3').click(function(e){
      $('.active-fact').hide();
      e.preventDefault();
      $('.fact3').show().addClass('active-fact');
   });

   $('.valve4').click(function(e){
      $('.active-fact').hide();
      e.preventDefault();
      $('.fact4').show().addClass('active-fact');
   });

   $('.valve5').click(function(e){
      $('.active-fact').hide();
      e.preventDefault();
      $('.fact5').show().addClass('active-fact');
   });

   $('.valve6').click(function(e){
      $('.active-fact').hide();
      e.preventDefault();
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
