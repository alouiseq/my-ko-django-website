$(document).ready(function(){
  $("p.animate").hide();
  $("img").hover(function(){
    $(this).prev("p.animate").fadeIn(1000);
      
  }, function(){
    $(this).prev("p.animate").fadeOut(1000);
  })

  $("img").hover(function(){
    $(this).parent("div").animate({right:'100px'});
  })
});
