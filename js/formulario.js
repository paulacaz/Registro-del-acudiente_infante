const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	registroCivil: /^\d{1,10}$/, // 1 a 10 numeros.
	nombre_paciente: /[a-zA-Z0-9\_\-]{1,40}$/, // Letras, numeros, guion y guion_bajo
	apellido_paciente: /[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	fecha: /^.{4,12}$/, // 4 a 12 digitos.
	nombre_acudiente: /[a-zA-Z0-9\_\-]{1,40}$/, // Letras, numeros, guion y guion_bajo
	apellido_acudiente: /[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	direccion:/[a-zA-Z0-9_.+-]/,
	barrio: /^[a-zA-Z0-9\_\-]{1,16}$/,
	ciudad: /^[a-zA-Z0-9\_\-]{4,16}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/,// 7 a 14 numeros.
}

const campos = {
	registroCivil: false,
	nombre_paciente: false,
	apellido_paciente: false,
	fecha: false,
	nombre_acudiente: false,
	apellido_acudiente: false,
	direccion: false,
	barrio: false,
	ciudad: false,
	correo: false,
	telefono: false,
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "registroCivil":
			validarCampo(expresiones.registroCivil, e.target, 'registroCivil');
		break;

		case "nombre_paciente":
			validarCampo(expresiones.nombre_paciente, e.target, 'nombre_paciente');
		break;

			case "apellido_paciente":
			validarCampo(expresiones.apellido_paciente, e.target, 'apellido_paciente');
		break;

		case "fecha":
			validarCampo(expresiones.fecha, e.target, 'fecha');
		break;

		case "nombre_acudiente":
			validarCampo(expresiones.nombre_acudiente, e.target, 'nombre_acudiente');
		break;

		case "apellido_acudiente":
			validarCampo(expresiones.apellido_acudiente, e.target, 'apellido_acudiente');
		break;

		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;

		case "barrio":
			validarCampo(expresiones.barrio, e.target, 'barrio');
		break;

		case "ciudad":
			validarCampo(expresiones.ciudad, e.target, 'ciudad');
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.registroCivil && campos.nombre_paciente && campos.apellido_paciente && campos.fecha && campos.nombre_acudiente && campos.apellido_acudiente && campos.direccion && campos.barrio && campos.ciudad && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-exito');
	}
});