# Registro-de-acudiente_infante
Pfizer kids at Home
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Formulario del paciente</title>
	<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="css/estilos.css">
</head>

<body>

	<main>
		<h1>REGISTRO DEL ACUDIENTE Y EL PACIENTE </h1>
		<form action="" class="formulario" id="formulario">

			<!-- Grupo: Nombre del paciente -->
			<div class="formulario__grupo" id="grupo__nombre del paciente">
				<label for="nombre del paciente" class="formulario__label">Nombre del paciente</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="paciente" id="paciente"
						placeholder="Ej:Thiago Andrés Guerra">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El nombre del paciente</p>
			</div>

			<!-- Grupo: Fecha de nacimiento-->
			<div class="formulario__grupo" id="grupo__usuario">
				<label for="fecha de nacimiento" class="formulario__label">Fecha de nacimiento</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="edad" id="Fecha de nacimiento"
						placeholder="mm/dd/aaaa">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Fecha de nacimiento del paciente</p>
			</div>

			<!-- Grupo: Nombres completos -->
			<div class="formulario__grupo" id="grupo__nombre">
				<label for="nombre" class="formulario__label">Nombres completos</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="nombre" id="nombre"
						placeholder="Ej: María Paula">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Nombres completos de la acudente</p>
			</div>

			<!-- Grupo: Apellidos completos -->
			<div class="formulario__grupo" id="grupo__apellido">
				<label for="apellidos" class="formulario__label">Apellidos completos</label>
				<div class="formulario__grupo-input">
					<input type="apellidos" class="formulario__input" name="apellidos" id="apellidos"
						placeholder="Ej: Guerra">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">Apellidos completos de la acudente.</p>
			</div>

			<!-- Grupo: Dirección -->
			<div class="formulario__grupo" id="direccion">
				<label for="direccion" class="formulario__label">Dirección</label>
				<div class="formulario__grupo-input">
					<input type="direccion" class="formulario__input" name="direccion" id="direccion"
						placeholder="Ej: Calle 4 sur e 56">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">La dirección que vive el paciente.</p>
			</div>

			<!-- Grupo: Barrio -->
			<div class="formulario__grupo" id="direccion">
				<label for="barrio" class="formulario__label">Barrio</label>
				<div class="formulario__grupo-input">
					<input type="barrio" class="formulario__input" name="direccion" id="barrio"
						placeholder="Ej: Cándido">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El barrio que vive el paciente.</p>
			</div>

			<!-- Grupo: Ciudad -->
			<div class="formulario__grupo" id="direccion">
				<label for="ciudad" class="formulario__label">Ciudad</label>
				<div class="formulario__grupo-input">
					<input type="ciudad" class="formulario__input" name="direccion" id="ciudad" placeholder="Ej: Neiva">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">La ciudad que vive el paciente.</p>
			</div>

			<!-- Grupo: Correo Electronico -->
			<div class="formulario__grupo" id="grupo__correo">
				<label for="correo" class="formulario__label">Correo Electrónico</label>
				<div class="formulario__grupo-input">
					<input type="email" class="formulario__input" name="correo" id="correo"
						placeholder="correo@correo.com">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y
					guion bajo.</p>
			</div>

			<!-- Grupo: Teléfono -->
			<div class="formulario__grupo" id="grupo__telefono">
				<label for="telefono" class="formulario__label">Teléfono</label>
				<div class="formulario__grupo-input">
					<input type="text" class="formulario__input" name="telefono" id="telefono"
						placeholder="+57 3110007332">
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.
				</p>
			</div>

			<!-- Grupo: Terminos y Condiciones -->
			<div class="formulario__grupo" id="grupo__terminos">
				<label class="formulario__label">
					<input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos">
					Acepto los Terminos y Condiciones			
	</label>
			</div>

			<div class="formulario__mensaje" id="formulario__mensaje">
				<p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario
					correctamente. </p>
			</div>

			<div class="formulario__grupo formulario__grupo-btn-enviar">
				<button type="submit" class="formulario__btn">Enviar</button>
				<p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
			</div>
		</form>
	</main>

	<script src="js/formulario.js"></script>
	<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
</body>

</html>
