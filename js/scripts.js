$(document).ready(function() {

  $("#formOne").submit(function() {
    var sizeInput = $("input#size").val();
    var styleInput = $("input#style").val();
    var priceInput = $("input:radio[name=price]:checked").val();
    var dateInput = $("input#date").val();
    var colorInput = $("input#color").val();

  $(".size").text(sizeInput);
  $(".style").text(styleInput);
  $(".price").text(priceInput);
  $(".date").text(dateInput);
  $(".color").text(colorInput);

  $("#submission").show();

  event.preventDefault();
  });
});
