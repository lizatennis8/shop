$(document).ready(function() {

  $("#formOne").submit(function() {
    var sizeInput = $("#size").val();
    var styleInput = $("#style").val();
    var priceInput = $("input:radio[name=price]:checked").val();
    var dateInput = $("#date").val();
    var colorInput = $("#color").val();

  $(".size").text(sizeInput);
  $(".style").text(styleInput);
  $(".price").text(priceInput);
  $(".date").text(dateInput);
  $(".color").text(colorInput);

  $("#submission").show();

  event.preventDefault();
  });
});
