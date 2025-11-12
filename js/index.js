// CLICK
$("#btnSaludo").click(function() {
  alert("Hola, hiciste clic en el botón");
});

// FOCUS
$("#nombre").focus(function() {
  $(this).css("border", "2px solid blue");
});

// BLUR
$("#nombre").blur(function() {
  alert("Has salido del campo nombre");
});

// MOUSEOVER
$("#mensaje").mouseover(function() {
  $(this).css("color", "red");
});

// HOVER
$("#textoColor").hover(
  function() { $(this).css("color", "red"); },
  function() { $(this).css("color", "black"); }
);
