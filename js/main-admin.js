function mostrar(){
    
}
const btn = document.querySelector('#Boton_Menu');
const menu = document.querySelector('#Menu');
console.log("aaaaaaa")

btn.addEventListener('click', function () {
    console.log("adfadf")
    menu.classList.toggle("contenedor-nav");
    menu.classList.toggle("contenedor-disable");
});