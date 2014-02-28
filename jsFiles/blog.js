function retrieveBlogs(date_re){
  var data = new Object();

  for(view in blogs){
    var current = blogs[view],
        datepost_re = /(.+?):\s*(.+)/g,
        date_matches = [],
        post_matches = [],
        topic = current.topic,
        match = datepost_re.exec(current.post);

    while(match != null){
      date_matches.push(match[1]);
      post_matches.push(match[2]);
      match = datepost_re.exec(current.post);
    }

    if(!date_re){
      return [date_matches, post_matches, view, topic];
    }
    data[view] = {
      dates: date_matches,
      posts: post_matches,
      topic: topic
    }

    // Add dates into Archives section
    matches = date_matches[0].match(date_re);
    var long_date = matches[1] + " " + matches[3];
    $("ol#dates").append("<li><a id='" + view + "' href='#'>" + long_date + "</a></li>");
  }
  return data;
}

function outputBlogs(options){
  var dates = options.date_matches || options.data[options.val].dates;
  var posts = options.post_matches || options.data[options.val].posts;
  var topic = options.topic || options.data[options.val].topic;
  var id = options.val || Object.keys(blogs)[0];

  var blog = $(".blog-main"),
      blog_title = "<h4 class='blog-post-title'></h4>",
      blog_date = "<p class='blog-post-meta'></p>",
      blog_post = "<p class='posts'></p>",
      counter = 0;    // track new id for each blog post

  blog.children().remove();

  for(var i = dates.length - 1; i >= 0; i--){
    var blog_div = "<div id='" + counter + "' class='blog-post'></div>";
    blog.append(blog_div);
    var post = $("#" + counter++);
    post.append(blog_title);
    $(".blog-post-title:last").text(topic);
    post.append(blog_date);
    $(".blog-post-meta:last").text(dates[i]);
    post.append(blog_post);
    $(".posts:last").html(posts[i]);
  }
}

// Start here
var date_re = /(\w+)\s*(\d+),\s*(\d*)/;

// default page view
var dates_posts = retrieveBlogs(null);   // only retrieves latest blog
var newest = dates_posts[2];

var options = {
  date_matches: dates_posts[0],
  post_matches: dates_posts[1],
  topic: dates_posts[3],
  date_re: date_re
}

outputBlogs(options);   // display latest blog

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

    outputBlogs(opts);   // display blogs
  }
});
