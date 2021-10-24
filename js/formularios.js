const formulario = document.getElementById('form_solicitante');
const inputs = document.querySelectorAll('#form_solicitante input');

const expresiones = {
    plainText: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
	cedulas: /^.\d{7,10}$/, // 7 a 10 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefonos: /^\d{7,14}$/, // 7 a 14 numeros.
    valores: /^\d{4,30}$/,
    fax:  /^\d{7,14}$/,
    ext:  /^\d{1,3}$/,
    sn:  /^\d{1,2}$/,
    fecha : /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
    direccion: /^[^«$%&/()=*]{10,140}$/,
    nit: /^[\d.\_\-]{4,16}$/
}

var campos = {
	nombre:false, 
	apellido:false, 
	profesion:false, 
	lugar_nacimiento:false, 
	fecha_nacimiento:false, 
	personas_cargo:false, 
    cedula:false,
	expedicion:false, 
	documento_ciudad:false, 
	residencia_direccion:false, 
	residencia_ciudad:false, 
	residencia_telefono:false, 
	oficina_ciudad:false,
	oficina_direccion:false, 
	oficina_celular:false, 
	fax:false, 
	ext:false, 
	oficina_email:false, 
	tipo_de_trabajo:false, 
	entidad:false, 
	actividad_economica:false, 
	nit:false, 
	cargo:false, 
	sueldo_basico:false, 
	honorarios:false, 
	otros_ingresos:false, 
	otros_descripcion_ingresos:false, 
	total_ingresos:false, 
	arriendo:false, 
	gastos_familiares:false, 
	total_egresos:false, 
	referencia_familiar:false, 
	parentesco:false, 
	familiar_telefono:false, 
	familiar_ciudad:false, 
	familiar_direccion:false, 
	referencia_personal:false, 
	personal_telefono:false, 
	personal_ciudad:false, 
	personal_direccion:false, 
	valor_matricula:false, 
	codigo:false, 
	valor_credito:false, 
	fechas_corte:false
}


const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
			validarCampo(expresiones.plainText, e.target, 'nombre');
		break;
        case 'apellido':
			validarCampo(expresiones.plainText, e.target, 'apellido');
		break;
        case 'profesion':
			validarCampo(expresiones.plainText, e.target, 'profesion');
		break;
        case 'lugar_nacimiento':
			validarCampo(expresiones.plainText, e.target, 'lugar_nacimiento');
		break;
        case 'fecha_nacimiento':
			validarCampo(expresiones.fecha, e.target, 'fecha_nacimiento');
		break;
        case 'personas_cargo':
			validarCampo(expresiones.sn, e.target, 'personas_cargo');
		break;
        case 'cedula':
			validarCampo(expresiones.cedulas, e.target, 'cedula');
		break;
        case 'expedicion':
			validarCampo(expresiones.fecha, e.target, 'expedicion');
		break;
        case 'documento_ciudad':
			validarCampo(expresiones.plainText, e.target, 'documento_ciudad');
		break;
        case 'residencia_direccion':
			validarCampo(expresiones.direccion, e.target, 'residencia_direccion');
		break;
        case 'residencia_ciudad':
			validarCampo(expresiones.plainText, e.target, 'residencia_ciudad');
		break;
        case 'residencia_telefono':
			validarCampo(expresiones.telefonos, e.target, 'residencia_telefono');
		break;
        case 'oficina_ciudad':
			validarCampo(expresiones.plainText, e.target, 'oficina_ciudad');
		break;
        case 'oficina_direccion':
			validarCampo(expresiones.direccion, e.target, 'oficina_direccion');
		break;
        case 'oficina_celular':
			validarCampo(expresiones.telefonos, e.target, 'oficina_celular');
		break;
        case 'fax':
			validarCampo(expresiones.fax, e.target, 'fax');
		break;
        case 'ext':
			validarCampo(expresiones.ext, e.target, 'ext');
		break;
        case 'oficina_email':
			validarCampo(expresiones.correo, e.target, 'oficina_email');
		break;
        case 'tipo_de_trabajo':
			validarCampo(expresiones.plainText, e.target, 'tipo_de_trabajo');
		break;
        case 'actividad_economica':
			validarCampo(expresiones.plainText, e.target, 'actividad_economica');
		break;
        case 'nit':
			validarCampo(expresiones.nit, e.target, 'nit');
		break;
        case 'cargo':
			validarCampo(expresiones.plainText, e.target, 'cargo');
		break;
        case 'sueldo_basico':
			validarCampo(expresiones.valores, e.target, 'sueldo_basico');
		break;
        case 'honorarios':
			validarCampo(expresiones.valores, e.target, 'honorarios');
		break;
        case 'otros_ingresos':
			validarCampo(expresiones.valores, e.target, 'otros_ingresos');
		break;
        case 'otros_descripcion_ingresos':
			validarCampo(expresiones.valores, e.target, 'otros_descripcion_ingresos');
		break;
        case 'total_ingresos':
			validarCampo(expresiones.valores, e.target, 'total_ingresos');
		break; 
        case 'arriendo':
			validarCampo(expresiones.valores, e.target, 'arriendo');
		break; 
        case 'gastos_familiares':
			validarCampo(expresiones.valores, e.target, 'gastos_familiares');
		break; 
        case 'total_egresos':
			validarCampo(expresiones.valores, e.target, 'total_egresos');
		break; 
        case 'referencia_familiar':
			validarCampo(expresiones.plainText, e.target, 'referencia_familiar');
		break; 
        case 'parentesco':
			validarCampo(expresiones.plainText, e.target, 'parentesco');
		break; 
        case 'familiar_telefono':
			validarCampo(expresiones.telefonos, e.target, 'familiar_telefono');
		break; 
        case 'familiar_ciudad':
			validarCampo(expresiones.plainText, e.target, 'familiar_ciudad');
		break; 
        case 'familiar_direccion':
			validarCampo(expresiones.direccion, e.target, 'familiar_direccion');
		break;  
        case 'referencia_personal':
			validarCampo(expresiones.plainText, e.target, 'referencia_personal');
		break;  
        case 'personal_telefono':
			validarCampo(expresiones.telefonos, e.target, 'personal_telefono');
		break;  
        case 'personal_ciudad':
			validarCampo(expresiones.plainText, e.target, 'personal_ciudad');
		break;  
        case 'personal_direccion':
			validarCampo(expresiones.direccion, e.target, 'personal_direccion');
		break; 
        case 'valor_matricula':
			validarCampo(expresiones.valores, e.target, 'valor_matricula');
		break; 
        case 'codigo':
			validarCampo(expresiones.valores, e.target, 'codigo');
		break; 
        case 'valor_credito':
			validarCampo(expresiones.valores, e.target, 'valor_credito');
		break; 
        case 'fechas_corte':
			validarCampo(expresiones.fecha, e.target, 'fechas_corte');
		break; 
        case 'entidad':
			validarCampo(expresiones.plainText, e.target, 'entidad');
		break; 
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (true){
		formulario.submit();
	}
});