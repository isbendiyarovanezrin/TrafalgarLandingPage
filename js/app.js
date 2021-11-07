// loader
function removeLoader() {
  $("#loadingDiv").fadeOut(500, function () {
    $("#loadingDiv").remove();
  });
}

$(window).on("load", function () {
  setTimeout(removeLoader, 2000);

  $("body").css(
    "overflow-y",
    "hidden",
    setTimeout(function () {
      $("body").css("overflow-y", "visible");
    }, 2000)
  );
});
