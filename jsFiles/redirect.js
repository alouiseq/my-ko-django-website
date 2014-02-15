function redirect(e){
  var target = window.event? window.event.srcElement : e.target; 
  var x = confirm("This link will take you to another site. Continue?");
  if(x)
    target.target = "_blank";
  else
    target.href="#";
}

var createListener = function(){
  var ffs = document.getElementsByClassName("fantasy");
  for(var i=0; i<ffs.length; i++){
    ffs[i].addEventListener("click", function(e){redirect(e);}, false);
  }
}

window.addEventListener("load", createListener, false);
