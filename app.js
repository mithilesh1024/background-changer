$(document).ready(() => {
    $(".value").html("#7c7c7c");
  $(".submit").click(function () {
    var text = $(".text").val();
    $("body").css({ "background": text });
    $(".text").val("");
    $(".value").html(text);
  });
});
