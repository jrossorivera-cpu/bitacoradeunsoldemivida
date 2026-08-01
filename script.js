// ==========================================
// ELEMENTOS
// ==========================================

const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const historia = document.getElementById("historia");
const final = document.getElementById("final");
const sorpresa = document.getElementById("sorpresa");
const amorFinal = document.getElementById("amorFinal");


const foto = document.getElementById("foto");
const tituloFoto = document.getElementById("tituloFoto");
const textoFoto = document.getElementById("textoFoto");
const contador = document.getElementById("contadorRecuerdos");


let posicion = 0;




// ==========================================
// RECUERDOS
// ==========================================

const recuerdos = [

{
imagen:"foto1.jpeg",
titulo:"Amor de mi vida ❤️",
texto:"Hoy quería hacer algo diferente. Algo que pudiera recordarte lo especial que eres para mí."
},

{
imagen:"foto2.jpeg",
titulo:"Tu sonrisa ✨",
texto:"Hay sonrisas que tienen la capacidad de hacer más bonito cualquier momento."
},

{
imagen:"foto3.PNG",
titulo:"Gracias por existir ❤️",
texto:"Gracias por llegar a mi vida y dejar recuerdos que siempre voy a guardar."
},

{
imagen:"foto4.jpeg",
titulo:"Momentos bonitos",
texto:"Algunos instantes pasan rápido, pero quedan viviendo en el corazón."
},

{
imagen:"foto5.jpeg",
titulo:"Siempre tú",
texto:"Entre tantas personas en el mundo, me alegra haber encontrado una historia contigo."
},

{
imagen:"foto6.jpeg",
titulo:"Nuestro camino",
texto:"Todavía quedan muchos recuerdos bonitos por construir."
},

{
imagen:"foto13.jpeg",
titulo:"Un momento especial",
texto:"Hay momentos que uno quisiera guardar para siempre."
},

{
imagen:"foto8.jpeg",
titulo:"Admiro de ti",
texto:"La mujer que eres, tu forma de luchar y todo lo que representas."
},

{
imagen:"foto7.GIF",
titulo:"Tu mirada",
texto:"Hay miradas que dicen más que mil palabras."
},

{
imagen:"foto9.jpeg",
titulo:"Mis recuerdos favoritos",
texto:"Cada momento contigo tiene algo que lo hace especial."
},

{
imagen:"foto11.jpeg",
titulo:"Nuestra historia",
texto:"Una historia que espero seguir escribiendo."
},

{
imagen:"foto12.jpeg",
titulo:"Mi compañera",
texto:"Gracias por compartir momentos y caminos conmigo."
},

{
imagen:"foto10.jpeg",
titulo:"Mi inspiración",
texto:"Eres parte de muchas razones para seguir creciendo."
},

{
imagen:"foto14.jpeg",
titulo:"Siempre nosotros",
texto:"Cada recuerdo tiene una parte de nuestra historia."
},

{
imagen:"foto15.jpeg",
titulo:"Te amo ❤️",
texto:"Y todavía siento que me quedan muchas maneras de demostrártelo."
}

];







// ==========================================
// PRE-CARGAR FOTOS
// ==========================================

recuerdos.forEach(recuerdo=>{

let img = new Image();

img.src = "img/" + recuerdo.imagen;

});






// ==========================================
// INICIO
// ==========================================

function empezar(){

inicio.style.display="none";

carta.classList.remove("oculto");

}







// ==========================================
// ABRIR HISTORIA
// ==========================================

function mostrarHistoria(){

carta.style.display="none";

historia.classList.remove("oculto");

posicion=0;

cargarRecuerdo();

}








// ==========================================
// CARGAR RECUERDO
// ==========================================

function cargarRecuerdo(){


const recuerdo = recuerdos[posicion];


contador.innerHTML =
`❤️ Recuerdo ${posicion+1} de ${recuerdos.length} ❤️`;



foto.style.opacity=0;



setTimeout(()=>{


foto.src="img/"+recuerdo.imagen;


tituloFoto.innerHTML =
recuerdo.titulo;


textoFoto.innerHTML =
recuerdo.texto;



foto.style.opacity=1;



},300);



}






// ==========================================
// SIGUIENTE FOTO
// ==========================================

function siguienteFoto(){


posicion++;



if(posicion < recuerdos.length){


cargarRecuerdo();


}

else{


historia.style.display="none";


final.classList.remove("oculto");


}


}









// ==========================================
// MOSTRAR SORPRESA
// ==========================================

function mostrarSorpresa(){


final.style.display="none";


sorpresa.classList.remove("oculto");


}







// ==========================================
// FINAL "Y TE AMO"
// ==========================================

function mostrarAmorFinal(){


setTimeout(()=>{


sorpresa.style.display="none";


amorFinal.classList.remove("oculto");


},1500);


}







// ==========================================
// CORAZONES FLOTANDO
// ==========================================


function crearCorazon(){


const contenedor =
document.getElementById("corazones");


if(!contenedor)return;



const corazon =
document.createElement("span");


corazon.className="corazon";


corazon.innerHTML="❤️";


corazon.style.left =
Math.random()*100+"%";



corazon.style.fontSize =
(15 + Math.random()*25)+"px";



corazon.style.animationDuration =
(6 + Math.random()*8)+"s";



contenedor.appendChild(corazon);



setTimeout(()=>{

corazon.remove();

},12000);



}



setInterval(crearCorazon,900);









// ==========================================
// CORAZONES AL TOCAR
// ==========================================


document.addEventListener("click",(evento)=>{


const corazon =
document.createElement("span");


corazon.className="corazon";


corazon.innerHTML="❤️";


corazon.style.position="fixed";


corazon.style.left =
evento.clientX+"px";


corazon.style.top =
evento.clientY+"px";


corazon.style.fontSize="30px";


document.body.appendChild(corazon);



setTimeout(()=>{

corazon.remove();

},2500);



});
