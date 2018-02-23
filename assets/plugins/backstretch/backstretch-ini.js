$(document).ready(function() {
  $.getScript("assets/plugins/backstretch/jquery.backstretch.min.js", function() {
    $(".fullscreen-static-image").backstretch("videos/My%20Movie.mp4");
  });
});