$(document).ready(function(){
  // Default to pause audio
  $("object").each(function(){
    this.pause();
  });

  $("#greeting").append("<p id='greeting'>" + greeting + "</p>");
  $("#auth-title").append("<pre>" + auth_title + "</pre>");
  $("#content").append("<pre>" + content + "</pre>");

  // Add figure captions
  $("#qtag").find("figcaption").text(misc["q"]);
  $("#mtag").find("figcaption").text(misc["m"]);
  $("#mqtag").find("figcaption").text(misc["mq"]);
  $("#qmems").html("<i><span>" + misc['feat'] + "</span> " + ' ' + qmembers + "</i>");
  $("#mmems").html("<i><span>" + misc['feat'] + "</span> " + ' ' + mmembers + "</i>");
  $("#mqmems").html("<i><span>" + misc['feat'] + "</span> " + ' ' + mqmembers + "</i>");

  // Add images
  for(q in qcards){
    $("div#qbox").append("<a href='" + qcards[q].url + "' target='_blank'><img src='images/" + qcards[q].img + "' /></a>");
  }
  for(m in mcards){
    $("div#mbox").append("<a href='" + mcards[m].url + "' target='_blank'><img src='images/" + mcards[m].img + "' /></a>");
  }
  for(mq in mqcards){
    $("div#mqbox").append("<a href='" + mqcards[mq].url + "' target='_blank'><img src='images/" + mqcards[mq].img + "' /></a>");
  }
});
