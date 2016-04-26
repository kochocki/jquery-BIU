$("#first_name").blur(function() {
  var name = $("#first_name");
  if (name.val() == "") {
    name.addClass("error");
    name.val("podaj imie");
  }

});
