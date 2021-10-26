const btn = document.querySelector('#Boton_Menu');
const menu = document.querySelector('#Menu');
console.log("aaaaaaa")

btn.addEventListener('click', function () {
    console.log("adfadf")
    menu.classList.toggle("contenedor-nav");
    menu.classList.toggle("contenedor-disable");
});

//---------------------------revisión-------------------------------
// Obtenemos la id del boton
let boton = document.getElementById("Botonaprovar");
let boton2 = document.getElementById("Desaprobar");
let boton3 = document.getElementById("Botonaprovar2");
let boton4 = document.getElementById("Desaprobar2");
let boton5 = document.getElementById("Botonaprovar3");
let boton6 = document.getElementById("Desaprobar3");
let boton7 = document.getElementById("Botonaprovar4");
let boton8 = document.getElementById("Desaprobar4");

// Le damos el evento a los botones
boton.addEventListener("click",cambiar);
boton2.addEventListener("click",cambiar2);
boton3.addEventListener("click",cambiar3);
boton4.addEventListener("click",cambiar4);
boton5.addEventListener("click",cambiar5);
boton6.addEventListener("click",cambiar6);
boton7.addEventListener("click",cambiar7);
boton8.addEventListener("click",cambiar8);

//Creamos las funciones 
function cambiar(){
    boton.style.color=('green')
    boton2.style.color=('black')
}

function cambiar2(){
    boton2.style.color=('red') 
    boton.style.color=('black')
}
function cambiar3(){
    boton3.style.color=('green')
    boton4.style.color=('black')
}
function cambiar4(){
    boton3.style.color=('black') 
    boton4.style.color=('red')
}
function cambiar5(){
    boton5.style.color=('green')
    boton6.style.color=('black')
}
function cambiar6(){
    boton5.style.color=('black') 
    boton6.style.color=('red')
}
function cambiar7(){
    boton7.style.color=('green')
    boton8.style.color=('black')
}
function cambiar8(){
    boton7.style.color=('black') 
    boton8.style.color=('red')
}
///------------------------------Revisión----------------------------------
