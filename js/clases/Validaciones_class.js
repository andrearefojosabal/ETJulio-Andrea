class Validaciones_Atomicas {

	constructor() {

	}

	min_size(id, minsize) {
		let elemento = document.getElementById(id);
		switch (elemento.tagName) {
			case 'INPUT':
				switch (elemento.type) {
					case 'number':
					case 'email':
					case 'text':
						var valorelemento = elemento.value;
						if (valorelemento.length < minsize) {
							return false;
						}
						else {
							return true;
						}
						break;
					case 'file':
						var valorelemento = elemento.files[0].name;
						if (valorelemento.length < minsize) {
							return false;
						}
						else {
							return true;
						}
						break;
					default:
						break;

				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

	max_size(id, maxsize) {	
		let elemento = document.getElementById(id);
		switch (elemento) {
			case 'INPUT':
				switch (elemento.type) {
					case 'number':
					case 'email':
					case 'text':
						console.log('max_size text');
						var valorelemento = elemento.value;
						if (valorelemento.length > maxsize) {
							return false;
						}
						else {
							return true;
						}
						break;
					case 'file':
						var valorelemento = elemento.files[0].name;
						if (valorelemento.length > maxsize) {
							return false;
						}
						else {
							return true;
						}
						break;
					default:
						break;

				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}
	}

	format(id, exprreg) {
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}

	no_file(id){
		if (document.getElementById(atributo).files.length != 0){
			return true;
		}
		return false;
	}

	max_size_file(id, maxsize) {
		if (document.getElementById(id).files[0].size < maxsize) {
			return true;
		}
		return false;
	}
	/*
		file_type(id, array_tipos) {
			return array_tipos.includes(document.getElementById(id).files[0].type);
		}*/
	file_type(id, array_tipos) {
		const elemento = document.getElementById(id);
		if (!elemento || !elemento.files || !elemento.files[0]) {
			return false;
		}
		return array_tipos.includes(elemento.files[0].type);
	}

	format_name_file(id, exprreg) {
		const elemento = document.getElementById(id);
		//Igual el if lo puedo quitar, pero lo dejo por si acaso
		if (!elemento || !elemento.files || !elemento.files[0]) {
			return false;
		}
		const nombreArchivo = elemento.files[0].name;
		const expresionregular = new RegExp(exprreg);
		return expresionregular.test(nombreArchivo);
	}

}