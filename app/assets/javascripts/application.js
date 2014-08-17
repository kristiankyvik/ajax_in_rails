// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var ready;
ready = function() {
  var add_post = function(title, content){
    $("#posts").append(title + ":" + content + "<br/>");
  };
  $("#create_post").click(function(evt){
    $('#form_display').show();
  }); 
  $("#submit").click(function(evt){
    var post_title = $("#post_title").val();
    var post_content = $("#post_content").val();
    add_post(post_title, post_content);
    $.ajax({
      type: "POST",
      url:"/posts",
      data: {"post": {"title": post_title, "content": post_content}},
      dataType: "script"
    });
  })
};

$(document).ready(ready);
$(document).on('page:load', ready);