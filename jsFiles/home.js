$(document).ready(function(){
  // toggle hide and show text on icons
  $("p.animate").hide();
  $("img").hover(function(){
    $(this).prev("p.animate").fadeIn(1000);
    $(this).prev("p.plain").wrapInner("<strong></strong>");
      
  }, function(){
    $(this).prev("p.animate").fadeOut(1000);
    var strong_elem = $(this).prev("p.plain").children("strong");
    strong_elem.replaceWith(strong_elem.html());
  })

  // animate left column
  $("img").hover(function(){
    $(this).parent("div.col-left").stop().animate({right:'50px'}, 1000).find("img").stop().animate({width:'250px', height:'250px'}, 1000);
  }, function(){
    $(this).parent("div.col-left").stop().animate({right:'-0px'}, 1000).find("img").stop().animate({width:'200px', height:'200px'}, 1000);;
  })
 
  // animate middle column
  $("a").hover(function(){
    $(this).parent("div.col-middle").find("img").stop().animate({width:'250px', height:'250px'}, 1000);
  }, function(){
    $(this).parent("div.col-middle").find("img").stop().animate({width:'200px', height:'200px'}, 1000);
  })

  // animate right column
  $("a").hover(function(){
    $(this).parent("div.col-right").stop().animate({left:'50px'}, 1000).find("img").stop().animate({width:'250px', height:'250px'}, 1000);
  }, function(){
    $(this).parent("div.col-right").stop().animate({left:'-0px'}, 1000).find("img").stop().animate({width:'200px', height:'200px'}, 1000);
  })
});
