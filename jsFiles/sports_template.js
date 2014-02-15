$(document).ready(function(){
  // add drop-down menu selections
  $.getJSON("http://websandbox.nfshost.com/textFiles/sports.json", function(data){
    var category_tmpl = "{{#category}}<option>{{.}}</option>{{/category}}";
    var category_html = Mustache.render(category_tmpl, data);
    $("#category").append(category_html);


    // category action 
    var cat_avail = true;
    $("#category").click(function(){
      var cat_index = this.selectedIndex;
      var cat_select = $(this).children(":eq("+ cat_index +")").text();
      var catid = cat_select.toLowerCase();
      if(cat_avail){
	var cat_tmpl = "<select id='"+catid+"'>{{#"+catid+"}}<option>{{.}}</option>{{/"+catid+"}}</select>";
	var cat_html = Mustache.render(cat_tmpl, data);
	$("select:last-of-type").after("&nbsp&nbsp" + cat_html);
        cat_avail = false;
      }
      else if($("select").length > 1){
        $("select:last-of-type").remove();
        cat_avail = true;
      }

      // sport action
      var sp_avail = true;
      $("#sport").click(function(){
	var sp_index = this.selectedIndex;
	var sp_select = $(this).children(":eq(" + sp_index + ")").text();
        var sp_id = sp_select.toLowerCase();
	var spType_tmpl = "<select id='"+sp_id+"'>{{#"+sp_select+"}}<option>{{.}}</option>{{/"+sp_select+"}}</select>";
        if(sp_avail){
	  var spType_html = Mustache.render(spType_tmpl, data);
	  $("select:last-of-type").after("&nbsp&nbsp" + spType_html);
          sp_avail = false;
        }
        else{
          $("select:last-of-type").remove();
          sp_avail = true;
        }

	// players action
	var pl_avail = true;
	$("#"+sp_id).click(function(){
	  var pl_index = this.selectedIndex;
	  var pl_select = $(this).children(":eq(" + pl_index + ")").text();
	  var pl_match = pl_select.match(/(\w+).*? (\w+$)/);
          console.log(pl_match);
	  var pl_short_match = pl_match[2];
          console.log(pl_short_match);
	  var pl_id = pl_short_match.toLowerCase();
	  var plType_tmpl = "<select id='"+pl_id+"'>{{#"+pl_short_match+"}}<option>{{.}}</option>{{/"+pl_short_match+"}}</select>";
	  if(pl_avail){
	    var plType_html = Mustache.render(plType_tmpl, data);
	    $("select:last-of-type").after("&nbsp&nbsp" + plType_html);
	    pl_avail = false;
	  }
	  else{
	    $("select:last-of-type").remove();
	    pl_avail = true;
	  }
	});
      });
    });
  });
  
  // Duplicate user text and output to page
  $("#user_textbox").on("keyup", function(){
    var txt = $(this).val();
    $("#user_text").text(txt);
  });
});
