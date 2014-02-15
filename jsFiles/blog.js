function retrieveBlogs(date_re){
  var data = new Object();

  for(view in blogs){
    var current = blogs[view],
        datepost_re = /(.+?):\s*(.+)/g,
        date_matches = [],
        post_matches = [],
        match = datepost_re.exec(current.post);

    while(match != null){
      date_matches.push(match[1]);
      post_matches.push(match[2]);
      match = datepost_re.exec(current.post);
    }

    if(!date_re){
      return [date_matches, post_matches, view];
    }
    data[view] = {
      dates: date_matches,
      posts : post_matches
    }

    // Add dates into Archives section
    matches = date_matches[0].match(date_re);
    var long_date = matches[1] + " " + matches[3];
    $("ul#dates").append("<li><a id='" + view + "' href='#dates'>" + long_date + "</a></li>");
  }
  return data;
}

function outputBlogs(options){
  var dates = options.date_matches || options.data[options.val].dates;
  var posts = options.post_matches || options.data[options.val].posts;
  var id = options.val || Object.keys(blogs)[0];

  $("#posts").html("<pre></pre>");
  // extract a subset of the date
  for(var i = dates.length - 1; i >= 0; i--){
    var matches = dates[i].match(options.date_re),
        short_date = matches[i].substr(0, 3) + " " + matches[2];

    $("#posts").find("pre").append("<strong><em>Updated: " + short_date + "</em></strong><br />" + posts[i] + "<br/><br/>");
  }
    
  $("#activities").html("<pre>" + blogs[id].activity + "</pre>");
}

$(document).ready(function(){
  var date_re = /(\w+)\s*(\d+),\s*(\d*)/;

  // default page view
  var dates_posts = retrieveBlogs(null);   // only retrieves latest blog
  var newest = dates_posts[2];

  var options = {
    date_matches: dates_posts[0],
    post_matches: dates_posts[1],
    date_re: date_re
  }

  outputBlogs(options);   // displays blogs

  // selected view
  var data = retrieveBlogs(date_re);   // retrieves ALL blogs

  // the default (latest) date is highlighted
  $("#"+newest).addClass("spotlight");

  // view blog posts based on month and year date
  $("a").click(function(){
    var val = $(this).attr("id");

    if(val != undefined){
      for(date_id in blogs){
	if(val == date_id){
	  $("#"+val).addClass("spotlight");
	}
	else{
	  $("#"+date_id).removeClass("spotlight");
	}
      }

      var opts = {
        data: data,
        val: val,
        date_re: date_re
      }

      outputBlogs(opts);   // displays blogs
    }
  });
});
