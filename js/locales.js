/*********************************************
Registro de la informacion de los locales y peliculas
****************************************/

var local=[
{ciudad:"La Libertad",numsala:"3 salas", direccion: "Av. Eleodoro solorzano"},
{ciudad:"Santa Elena",numsala:"15 salas", direccion: "Santa Elena"},
{ciudad:"Santa Elena",numsala:"5 salas", direccion: "Atahualpa"},
];

var pelicula=[
{nombre:"Capitán América: Civil War", director:"Joe Russo, Anthony Russo",genero:"ciencia ficcion", sinopsis:"Captain America: Civil War' de Marvel empieza donde lo dejó "Los Vengadores: La Era de Ultrón" ya que Steve Rogers lidera el nuevo equipo de los Vengadores en su incesante tarea de proteger a la humanidad. Después de que otro incidente internacional en el que se ven envueltos los Vengadores produzca daños colaterales, la presión política obliga a poner en marcha un sistema para depurar responsabilidades y un organismo rector que determine cuándo hay que recurrir a los servicios del equipo. El nuevo statu quo divide a los Vengadores mientras intentan proteger al mundo de un nuevo malvado"},
{nombre:"La noche que mi madre mató a mi padre", director:"Inés París",genero:"comedia", sinopsis:"Isabel (Belén Rueda) organiza una cena en su casa. Su marido, escritor de novelas policíacas (Eduard Fernández) y su ex mujer (María Pujalte) directora de cine, quieren convencer a un famoso actor argentino (Diego Peretti) de que protagonice su próxima película. En mitad de la cena aparece el ex de la anfitriona (Fele Martínez) con su nueva novia (Patricia Montero), que se fascina con el actor. La cena se va enredando y todos acaban perdiendo los papeles."},
{nombre:"Un paseo por el bosque", director:"Ken Kwapis",genero:"aventura", sinopsis:"Tras pasar dos décadas en Inglaterra, Bill Bryson (Robert Redford) regresa a los Estados Unidos con el fin de emprender la gran aventura de su vida: escalar el sendero de los Apalaches y sus más de 3.500 kilómetros de longitud, atravesando algunos de los paisajes más indescriptiblemente bellos del continente. Aunque para ello tenga que alejarse de su familia y de Catherine (Emma Thompson), su esposa.En este viaje contará con la ayuda de su viejo amigo Stephen Katz (Nick Nolte).En esta deliciosa comedia dirigida por Ken Kwapis (Una aventura extraordinaria, Qué les pasa a los hombres) , dos amigos descubrirán que la auténtica diversión empieza cuando desafías tus límites."},
{nombre:"Trumbo: La lista negra de Hollywood", director:"Jay Roach",genero:"comedia", sinopsis:"Trumbo es el biopic del famoso guionista Dalton Trumbo, autor del libreto de títulos tan emblemáticos en la historia del cine como “Vacaciones en Roma” o “Espartaco”. Su carrera casi llegó a su fin en 1940 tras ser incluido en la lista negra acusado de comunista. A partir de ese momento toda su vida dará un giro radical y tendrá que utilizar todo su talento para sobrevivir en una sociedad que le ha vuelto la espalda."},
{nombre:"Palmeras en la nieve", director:"Fernando González Molina",genero:"drama", sinopsis:"Desde 1926 la isla de Fernando Poo (ahora Bioko) formó parte de la Guinea Española, aunque era posesión española desde 1778, hasta que en 1968 se proclamó la independencia del país. La progresiva escalada de tensión y violencia de esos años supuso un complejo episodio de nuestro pasado del que apenas llegaban noticias a la península. "Palmeras en la Nieve" sitúa su acción por una parte en el periodo de transición de las colonias a provincias de ultramar hasta la independencia definitiva, y por otra en el presente, en Bioko, un territorio herido tras años de inestabilidad, dictaduras, desapariciones, tortura, y falta de libertades."},
];


/****************************************************
Imprimir por pantalla de lista seleccionada
*****************************************************/

function printList(list, ubica){ 
	var listHTML = '';
	if (ubica < 0) 
	{ 
		for(var i=0; i<list.length; i++)
		{
			listHTML += creaList(list, i);
		}
	}
	else
	{
		listHTML += creaList(list, ubica);
	}
	printHTML(listHTML, "inf-locales");
}


/******************************************
Funcion que crea las listas
********************************************/

function creaList(list, ubica){
	{ciudad:"La Libertad",numsala:"3 salas", direccion: "Av. Eleodoro solorzano"},
	var listHTMLlo = '';
		listHTMLlo += '<ul>**************************';
		listHTMLlo += '<li>Ciudad: ' + list[ubica].ciudad + '</li>';
		listHTMLlo += '<li>Número de sala: ' + list[ubica].numsala + '</li>';
		listHTMLlo += '<li>Dirección: ' + list[ubica].direccion + '</li>';
	listHTMLlo += '</ul> <br>' ;
	return listHTMLlo; 
}

/******************************************
Funcion para imprimir
********************************************/
function printHTMLlo(mensaje, locales)
{
	var infoDiv = document.getElementById('locales');
	infoDiv.innerHTML = mensaje;
}



/*********************************************
Escoger opciones q=salir l=listar o buscar
*********************************************/
while(true){
	
			alert("Programa terminado");
			printHTML('', "locales");
			
	}


var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 UN texto
$overlay.append($caption);

//agrgar el averlauy al body
$("body").append($overlay);



//Usuario sa click a un link que rodea la imagen
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);

//Mostrar el Lightbox con la imagen a la que se dio click
$image.attr("src",href);

var texto = $(this).children("img").attr("alt");
$caption.text(texto);

$overlay.show();
console.log(href);
});


//3. CUANDO SE DA CLICK EN EL OVERLAY
//3.1 ESCONDER EL OVERLAY

$overlay.click(function(){
	$overlay.hide();
});


/*****************MENU PARA MOVILES*******************/
//CREEMOS EL MENU LATERAL 
var $select = $("<select></select>");
$("#menu").append($select);

//RECORRER MENÚ
$("#menu a").each(function(){
var $anchor =$(this);
//crear una opcion para el select por cada elemnto del
var $option = $("<option></option>");
//obtener  cada valor de la opciin del atributo href
$option.val ($anchor.attr("href"));
//OBTENER EL VAL DE CADA OPCION
$option.text ($anchor.text());
//agregar la opcion al select
$select.append($option);


//OBTNER SI EL LINK ES LA PAGINA ACTUAL
if($(this).hasClass("selected")){
	$option.prop("selected",true);
}


}); 
$select.change(function()
{
	window.location= $select.val();

});



//esconder ayudas
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

$("form span").hide();
function esPasswordValido()
{
	return ($password.val().length > 8);
}



function coincidenPasswords()
{
	return ($password.val() === $confirmPassword.val());
}



function eventoPassword(){
	//Validar si la clave es valida
if(esPasswordValido()){
	//esxconder ayuda si es clave valida
	$password.next().hide();
}else{
	//Caso contrario mostrar ayuda
     $password.next().show();
}
}
/*if($password.val().length > 8){
		//Econder ayuda si la clñave es v{alida
			$password.next().hide();
		}else{
			//CVaso Contrario mostrar ayuda
			$password.next().show();
		}
	}*/


function confirmarPassword(){
	if($password.val() === $confirmPassword.val()){
		$confirmPassword.next().hide();	
		}else{

			$confirmPassword.next().show();	
	}
}


function usuarioIngresado(){
	return ($("#username").val().length > 0);
}


function validacionCompleta()
{
	return esPasswordValido() && coincidenPasswords() && usuarioIngresado();
}



function puedeEnviar()
{
	$("#submit").prop("disabled",!validacionCompleta());
}
	//cuando el usuario ingresa clave (evento input)
	//recordemis que podemos llamar multiples metodos en cadena
    //podemos incluso concatenar varias veces el mismo evento
    $password.focus(eventoPassword).keyup(eventoPassword).focus();
    $confirmPassword.focus(confirmarPassword).keyup(confirmarPassword).focus();
     puedeEnviar();