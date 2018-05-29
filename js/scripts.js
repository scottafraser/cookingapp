$(function() {
  $("#clickable").click(function() {
    $(".story").fadeToggle();
  });

  $("button#button").click(function() {
    $("body").toggleClass("darktheme");
    $(".goodboy").toggle();
    $(".badboy").toggle();
  });




  var convert = function(galls) {
  return galls * 3.785411784;
};

document.getElementById("buttonGals").addEventListener("click", function alert(convert(galls)));



});
