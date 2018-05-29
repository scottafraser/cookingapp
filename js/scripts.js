$(function() {
  $("#dogs").click(function() {
    $(".goodboy").toggle();
    $(".badboy").toggle();
  });

  $("#clickable").click(function() {
    $(".story").fadeToggle();
  });
});
