var html = '';
/*
este software permite obtener colores al azar 
definido por un numero ingresado por pantalla
*/
var numerocolores = 6;
function random(hasta)
	{
		return Math.floor(Math.random() * hasta);
	} 
// CREA UNA FUNCION DE COLORES  Basico
function crearColorBasico()
{
	var colorBasico = random(256);
	return colorBasico;
}

// CREA UNA FUNCION DE COLORES RGB
function crearColoresRGB()
{
	var azul =crearColorBasico();
	var rojo =crearColorBasico();
	var verde = crearColorBasico();
	var rgbColor = 'rgb('+ verde +',' + rojo +',' + azul +')';
	//alert("hola");
	return rgbColor;
}  
// Imprimimos el numero de colores deseados en el div
for (var i=0; i<numerocolores; i++)
{
	html += '<div style="background-color:' + crearColoresRGB() + '"></div>';
}
document.write(html);