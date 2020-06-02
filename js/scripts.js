$(document).ready(function () {
  $("button#lightbutton").click(function() {
    $("body").removeClass("dark");
    $("body").addClass("light");
  });
  $("button#darkbutton").click(function() {
    $("body").removeClass("light");
    $("body").addClass("dark");
  });
});