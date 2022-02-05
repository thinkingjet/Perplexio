$(window).scroll(function() {
  $("#aesthetic").css("opacity", 1 - $(window).scrollTop() / 125);
  if ($("#aesthetic").css("opacity") <= 0) {
    document.getElementById("aesthetic").style.visibility = "hidden";
  }
  else {
    document.getElementById("aesthetic").style.visibility = "visible";
  }
  $("#arrow").css("opacity", 1 - ($(window).scrollTop() - 250) / 125);
  if ($("#arrow").css("opacity") <= 0) {
    document.getElementById("arrow").style.visibility = "hidden";
  }
  else {
    document.getElementById("arrow").style.visibility = "visible";
  }
  document.getElementById("logo").style.filter = "brightness(" + $(window).scrollTop() / 125 + ")";
  $("#logo").css("opacity", 1 - ($(window).scrollTop() - 300) / 125);
  if ($("#logo").css("opacity") <= 0) {
    document.getElementById("logo").style.visibility = "hidden";
  }
  else {
    document.getElementById("logo").style.visibility = "visible";
  }
  $("#introduction").css("opacity", ($(window).scrollTop() - 300) / 125);
});