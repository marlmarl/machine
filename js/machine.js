$(document).ready(function() {

   $('.valve').click(function(e){
    e.preventDefault();
    $('.top-valve').hide();
    render();
    //$('#main-nav').css("display", "flex");
});


});


function load(){
  if(loading){
    setTimeout(load, 100);
  }else{
    render();
  }
}
