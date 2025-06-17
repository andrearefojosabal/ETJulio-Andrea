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
		switch (elemento.tagName) {
			case 'INPUT':
				switch (elemento.type) {
					case 'number':
					case 'email':
					case 'text':
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

	max_size_file(objfile, maxsize) {
		
		console.log('max_size_file');
		if (objfile.size > maxsize) {
			return false;
		}
		return true;
	}

	no_file(objfile) {
		
		console.log('no_file');
		return objfile instanceof File && objfile.size > 0;
	}

	file_type(objfile, array_tipos) {
		
		console.log('file_type');
		if (!(array_tipos.includes(objfile.type))) {
			return false;
		}
		return true;
	}

	format_name_file(objfile, exprreg) {
		if (!objfile || typeof objfile.name !== 'string') {
			return false;
		}
		let expresionregular = new RegExp(exprreg);
		let valor = objfile.name;
		console.log('format_name_file');
		return expresionregular.test(valor);
	}

}