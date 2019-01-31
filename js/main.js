$(document).ready(function() {
  $(".social-icon").css("font-size", "3rem");
  console.log("document ready");
  if (document.body.clientWidth >= 1000)
    $("#child-reference").html("Referência<br>pediátrica");

  if (document.body.clientWidth < 400) {
    $(".section3 h1").css("font-size", "2rem");
  }
});
