// evento clic
$("#btnSaludo").click(function() {
alert("Hola, hiciste clic en el botón");
));
//evento focus
$("#nombre").focus(function(){
$(this).css("border", "2px solid blue");
});
//evento blur
$("#nombre").blur(function(){
alert("Has salido del campo nombre")
});
//mouseover
$("#mensaje").mouseover (function (){ $(this).css("color", "red")
