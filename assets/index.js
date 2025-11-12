// CLICK
$("#btnSaludo").click(function() {
  alert("Hola, me apretaste, auch!!");
});

// FOCUS
$("#nombre").focus(function() {
  $(this).css("border", "5px solid blue");
});

// BLUR
$("#nombre").blur(function() {
  alert("Te juiste del campo nombre amigo");
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
