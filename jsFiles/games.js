$(document).ready(function(){
  var see_image = 'See Me';
  for(x in headers){   // add headers to the table
    $("table#games thead tr").append("<th>" + headers[x] + "</th>");
  } 
  for(l in games){  // add game and details in a row
    $("table#games tbody").append("<tr class='" + l + "'></tr>").each(function(){
      for(var t=0; t<games[l].length-1; t++){
	$(this).find("tr."+l).append("<td>" + games[l][t] + "</td>");

        // Add link to portion of the page for images
        if(games[l][t] == see_image){
          $("td:contains("+see_image+")").wrapInner("<a href='#" + l + "'></a>");
        }
      }
      $("."+l).find("td:last").wrapInner("<a title='" + games[l][t] + "' href='" + games[l][t] + "' target='_blank'></a>");
    });
  }

  // Add games images
  for(game in game_images){
    imagery = game_images[game];
    $("div.game_images").append("<div id='" + game + "'><b>" + game.toUpperCase() + "</b><br /></div><br />");
    for(img in imagery){
      var game_patt = /(\w)*/;
      var game_title = imagery[img].match(game_patt);
      console.log(game_title);
      $("#"+game).append("<a href='images/" + imagery[img] + "' title='" + game_title[0] + "' class='lightbox' data-group='game'><img title='" + game_title[0] + "' src='images/" + imagery[img] + "' height='200px' width='200px'></a>&nbsp&nbsp");
    }
  }
});
