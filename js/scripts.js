$(function() {
  $("#clickable").click(function() {
    $(".story").fadeToggle();
  });

  $("button#button").click(function() {
    $("body").toggleClass("darktheme");
    $(".goodboy").toggle();
    $(".badboy").toggle();
  });

});
