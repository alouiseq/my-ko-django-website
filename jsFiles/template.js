$(document).ready(function(){
  // use mustache.js to create template syntax
  $.getJSON('textFiles/data.json', function(data){
    // page tabs
    var template = "<ul class='nav nav-pills pull-right'>{{#info}}<li><a href={{url}}>{{name}}</a></li>{{/info}}</ul>";
    var html = Mustache.render(template, data);
    $("div.header").prepend(html);

    // activate page tab after load
    var tabname = $("h3.text-muted").text();    
    $(".header a:contains("+tabname+")").parent().attr("class", "active");

    // my name
    var myname_template = "<h2>{{myname}}</h2><h4>{{job_title}}</h4><br/>";
    var myname_html = Mustache.render(myname_template, data);
    $("#me").html(myname_html);

    // image size
    var width = "{{img_width}}";
    var height = "{{img_height}}";
    var width_html = Mustache.render(width, data);
    var height_html = Mustache.render(height, data);
    $(".main_image").attr("width", width_html);
    $(".main_image").attr("height", height_html);

    // Add copyright info at the footer
    var myRights = "{{copyright}}";
    var myRights_html = Mustache.render(myRights, data);
    $("#copyright").append(myRights_html);
  });
});
