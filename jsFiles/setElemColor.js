// Set a random background color for an element.
function setElemColor(id){
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);

  var elem = document.getElementById(id);
  if(!elem){
    alert("Nothing to change!");
    return;
  }
  else{
    elem.style.color = 'rgb('+red+ ',' +green+ ',' +blue+')';
  }
}
