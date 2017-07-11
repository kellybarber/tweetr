
$ ("document").ready(() => {

  $(".new-tweet form textarea").on("keydown", function(event) {
    $(this).parent().children("span").html(140 - (($(this).val()).length));
  })




})
