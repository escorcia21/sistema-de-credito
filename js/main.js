
const cancelar = document.getElementById('boton-cancelardelete');
const contenedormodal = document.getElementById('contenedor-eliminar');
cancelar.addEventListener("click", retirar);




function verificar(){
    var usuario, contra, confirmacontra;
    usuario = $('.cedula').val();
    contra = $('.contra').val();
    confirmacontra = $('.confirmacontra').val();
    var suma = usuario.length + contra.length;
    console.log(suma)
    
    if( usuario.length ==0 || contra.length==0 || confirmacontra.length==0){
        contenedormodal.classList.add('showeliminar');
    }else{
        location.href ="Login.html"
    }
}


function verificarinicio(){
    console.log("hol")
    var usuario, contra;
    usuario = $('.cedula').val();
    contra = $('.contra').val();
    var suma = usuario.length + contra.length;
    console.log(suma)
    
    if( usuario.length ==0 || contra.length==0){
        contenedormodal.classList.add('showeliminar');
    }else{
        if(usuario=="joyce"){
            location.href ="inicio-joyce.html"
        }else if(usuario=="admin"){
            location.href ="inicio-admin.html"
        }else if(usuario=="usuario"||"user"){
            location.href="inicio-usuario.html"
        }
    }
}

function verificarCrear(){
    console.log("hol")
    var nombre, apellido, correo, cedula, fecha, sexo, contra, confirmacontra;
    nombre = $('.nombre').val();
    apellido = $('.apellido').val();
    correo = $('.correo').val();
    cedula = $('.cedula').val();
    contra = $('.contra').val();
    fecha = $('.fecha').val();
    sexo = $('.sexo').val();
    console.log(fecha.length, sexo.length)
    confirmacontra = $('.confirmacontra').val();
    
    if( contra.length==0 || confirmacontra.length==0 || nombre.length==0 || apellido.length==0
        || correo.length==0 || fecha.length==0 || sexo.length==0 || cedula.length==0){
        contenedormodal.classList.add('showeliminar');
    }else{
        location.href ="Login.html"
    }
}


function retirar(){
    contenedormodal.classList.remove('showeliminar');
}