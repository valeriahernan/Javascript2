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
$("#mensaje").mouseover (function (){
$(this).css("color", "red"); });
// mouseout
$("#mensaje").mouseout(function() {
$(this).css("color", "black");
});

// HOVER
$("#textoColor").hover(
  function() { $(this).css("color", "red"); },
  function() { $(this).css("color", "black"); }
);
// DOUBLE CLICK
$("#dobleClick").dblclick(function() {
  $(this).css("font-size", "24px");
});

// KEYDOWN
$("#inputKey").keydown(function() {
  console.log("Tecla presionada");
});

// KEYUP
$("#inputKey").keyup(function() {
  console.log("Tecla soltada");
});

// SUBMIT
$("#formulario").submit(function(event) {
  event.preventDefault();
  alert("Formulario enviado :>");
});

// CHANGE
$("#selectOpcion").change(function() {
  alert("cambia la opción de seleción");
});

// SCROLL
$(window).scroll(function() {
  console.log("La página se deslpaza");
});   