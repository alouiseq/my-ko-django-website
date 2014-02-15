$(document).ready(function(){
  var buffer,
      changeChar,
      listItem,
      first_char,
      count = 0,
      listItems = [];

  for(x in projects){
    buffer = projects[x];
    changeChar = "<strong>" + buffer[0] + "</strong>"; // can style 1st char
    buffer = buffer.substr(1, buffer.length-1);
    buffer = changeChar + buffer;
    listItem = projects[x];
    first_char = listItem[0].toLowerCase();   // lower case for id attribute
    listItem = listItem.replace(/\s/g, "");
    listItem = first_char + listItem.substr(1, listItem.length-1)
    listItems.push(listItem);
    $("ul#project_list").append("<li id='" + listItem + "'>" + buffer + "</li>");
    $("li#"+listItem).attr("title", project_info[count]).append("<p class='descript'><em>" + project_info[count++]  + "</em></p>");
  
    // Toggle hide/show on project description
    $(".descript").hide(); 
    $("#"+listItem).on("click", function(){
      $(this).find("p").toggle();

      // highlight the selected project title
      for(item in listItems){
        if(listItems[item] == $(this).attr('id')){
          $(this).addClass("title_select");
        }
        else{
          $("#"+listItems[item]).removeClass("title_select");
        }
      }
    });

  }
});
