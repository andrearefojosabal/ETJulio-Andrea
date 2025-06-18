class Entidad_Abstracta extends Dom_validations {

	change_value_IU() {
	}

	async inicializar() {
		if (!this.datosespecialestabla) {
			this.datosespecialestabla = [];
		}

		if (this.entidad === 'project') {
			this.datosespecialestabla = ['start_date_project', 'end_date_project'];
		}

		this.access_functions = new ExternalAccess();
		this.validaciones = new Validaciones_Atomicas();
		this.cerrar_test();

		const resultado = await this.access_functions.back_request('', this.entidad, 'SEARCH');

		if (resultado.ok === true) {
			this.datos = resultado.resource;
			this.atributos = eval('estructura_' + this.entidad).attributes_list;
			this.columnasamostrar = eval('estructura_' + this.entidad).columnas_visibles_tabla;
		} else {
			this.datos = [];
			this.atributos = [];
			this.columnasamostrar = [];
		}

		this.crearTablaDatos();
	}

	crearTablaDatos() {

		document.getElementById("id_tabla_datos").style.display = 'block';

		this.createTabla(); // ya construye la tabla con datos
		this.construirSelect(); // ya coloca las columnas a mostrar

		//ocultar segun columnasamostrar
		if (this.datos != "") { this.mostrarocultarcolumnas() };

	}

	showTabla() {
		document.getElementById("id_tabla_datos").style.display = 'block';
	}

	cargar_formulario() {

		if (typeof this.cargar_formulario_html === 'function') {
			this.cargar_formulario_html();
		} else if (typeof this.cargar_formulario_dinamico === 'function') {
			this.cargar_formulario_dinamico();
		} else {
			alert('no existe formulario');
		}

	}

	cambiacolumnastabla(atributo) {
		document.querySelector("th[class='" + atributo + "']").style.display = 'none';
	}

	createForm_ADD() {
		this.accion = 'ADD';
		this.createForm();
		this.cargar_formulario();
		this.colocarvalidaciones('ADD');
		this.colocarboton('ADD');

		const estructura = eval('estructura_' + this.entidad);
		for (let atributo of estructura.attributes_list) {
			const def = estructura.attributes[atributo];

			if (def && def.is_pk && document.getElementById(atributo)) {
				document.getElementById(atributo).disabled = true;
			}

			if (atributo.includes('file') || def.html.type === 'file') {
				if (document.getElementById('label_' + atributo)) {
					document.getElementById('label_' + atributo).style.display = "none";
				}
				if (document.getElementById(atributo)) {
					document.getElementById(atributo).style.display = "none";
				}
			}
		}

		this.crear_metodos_comprobar();

		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.ADD();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_EDIT(datos) {
		this.accion = 'EDIT';
		this.createForm();
		this.datos = JSON.parse(JSON.stringify(datos));
		this.cargar_formulario();
		this.load_data();
		this.colocarvalidaciones('EDIT');
		this.colocarboton('EDIT');

		const estructura = eval('estructura_' + this.entidad);
		for (let atributo of estructura.attributes_list) {
			const def = estructura.attributes[atributo];

			if (def && def.is_pk && document.getElementById(atributo)) {
				document.getElementById(atributo).disabled = true;
			}

			if (atributo.includes('file') || def.html.type === 'file') {
				if (document.getElementById('label_' + atributo)) {
					document.getElementById('label_' + atributo).style.display = "none";
				}
				if (document.getElementById(atributo)) {
					document.getElementById(atributo).style.display = "none";
				}
				if (document.getElementById('link_' + atributo) && datos[atributo]) {
					document.getElementById('link_' + atributo).href += datos[atributo];
				}
			}
		}

		this.crear_metodos_comprobar();

		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.EDIT();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_SEARCH() {
		this.accion = 'SEARCH';
		this.createForm();
		this.cargar_formulario();
		this.colocarvalidaciones('SEARCH');
		this.colocarboton('SEARCH');

		const estructura = eval('estructura_' + this.entidad);
		for (let atributo of estructura.attributes_list) {
			const def = estructura.attributes[atributo];

			if ((atributo.includes('file') || def.html.type === 'file') && document.getElementById(atributo)) {
				document.getElementById(atributo).setAttribute('type', 'text');
			}

			if (document.getElementById(atributo)) {
				document.getElementById(atributo).disabled = false;
			}
		}

		this.crear_metodos_comprobar();

		document.getElementById("IU_form").setAttribute('onsubmit', "return validar.comprobar_submit_SEARCH();");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.SEARCH();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_DELETE(datos) {
		this.accion = 'DELETE';
		this.createForm();
		this.datos = JSON.parse(JSON.stringify(datos));
		this.cargar_formulario();
		this.load_data();
		this.colocarboton('DELETE');

		const estructura = eval('estructura_' + this.entidad);
		for (let atributo of estructura.attributes_list) {
			if (document.getElementById(atributo)) {
				document.getElementById(atributo).disabled = true;
			}

			if ((atributo.includes('file') || estructura.attributes[atributo].html.type === 'file')) {
				const labelNuevo = document.getElementById('label_nuevo_' + atributo);
				const inputNuevo = document.getElementById('nuevo_' + atributo);
				if (labelNuevo) labelNuevo.remove();
				if (inputNuevo) inputNuevo.remove();
				if (document.getElementById('link_' + atributo) && datos[atributo]) {
					document.getElementById('link_' + atributo).href += datos[atributo];
				}
			}
		}

		this.crear_metodos_comprobar();

		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "javascript:validar.DELETE();");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}

	createForm_SHOWCURRENT(datos) {
		this.accion = 'SHOWCURRENT';
		this.createForm();
		this.datos = JSON.parse(JSON.stringify(datos));
		this.cargar_formulario();
		this.load_data();

		const estructura = eval('estructura_' + this.entidad);
		for (let atributo of estructura.attributes_list) {
			if (document.getElementById(atributo)) {
				document.getElementById(atributo).disabled = true;
			}

			if ((atributo.includes('file') || estructura.attributes[atributo].html.type === 'file')) {
				const labelNuevo = document.getElementById('label_nuevo_' + atributo);
				const inputNuevo = document.getElementById('nuevo_' + atributo);
				if (labelNuevo) labelNuevo.remove();
				if (inputNuevo) inputNuevo.remove();
				if (document.getElementById('link_' + atributo) && datos[atributo]) {
					document.getElementById('link_' + atributo).href += datos[atributo];
				}
			}
		}

		this.crear_metodos_comprobar();

		document.getElementById("IU_form").setAttribute('onsubmit', "return true;");
		document.getElementById("IU_form").setAttribute('action', "");

		document.getElementById("div_IU_form").style.display = 'block';
		setLang();
	}


	/**
	 * Configura los campos del formulario según la acción
	 */
	aplicarConfiguracionCampos(accion) {
		const estructura = eval('estructura_' + this.entidad);

		for (let atributo of estructura.attributes_list) {
			const def = estructura.attributes[atributo];
			const campo = document.getElementById(atributo);

			if (!campo || !def) continue;

			const isFile = def.html.type === 'file' || atributo.includes('file') || atributo.startsWith('file');
			const labelFile = document.getElementById('label_' + atributo);
			const linkFile = document.getElementById('link_' + atributo);
			const labelNuevoFile = document.getElementById('label_nuevo_' + atributo);
			const inputNuevoFile = document.getElementById('nuevo_' + atributo);

			// Comportamiento según acción
			switch (accion) {
				case 'ADD':
				case 'EDIT':
					if (def.is_pk) campo.disabled = true;
					if (isFile) {
						if (campo) campo.style.display = 'none';
						if (labelFile) labelFile.style.display = 'none';
						if (linkFile) linkFile.style.display = 'none';
						if (labelNuevoFile) labelNuevoFile.style.display = 'inline';
						if (inputNuevoFile) inputNuevoFile.style.display = 'inline';
					}
					break;

				case 'SEARCH':
					campo.disabled = false;
					if (isFile) {
						if (campo) campo.style.display = 'inline';
						campo.type = 'text';
						if (inputNuevoFile) inputNuevoFile.style.display = 'none';
						if (labelNuevoFile) labelNuevoFile.style.display = 'none';
					}
					break;

				case 'DELETE':
				case 'SHOWCURRENT':
					campo.disabled = true;
					if (labelNuevoFile) labelNuevoFile.remove?.();
					if (inputNuevoFile) inputNuevoFile.remove?.();
					break;
			}
		}
	}


	cambiardatosespecialestabla(atributo, valoratributo) {

		if (atributo.includes('file')) {
			if (!valoratributo) {
				return "no hay fichero";
			}

			let baseUrl = `http://193.147.87.202/ET2/filesuploaded/files_${atributo}/${atributo}`;
			let enlace = `${baseUrl}${valoratributo}`;
			let icono = `<a id="link_${atributo}" href="${enlace}"><img src="./iconos/FILE.png" /></a>`;
			return valoratributo + ' ' + icono;
		}

		if (typeof valoratributo === 'string' && valoratributo.match(/^\d{4}[-/]\d{2}[-/]\d{2}$/)) {
			const separador = valoratributo.includes('-') ? '-' : '/';
			const [anio, mes, dia] = valoratributo.split(separador);
			return `${dia}/${mes}/${anio}`;
		}

		return valoratributo;
	}

	async SEARCH() {

		await this.access_functions.back_request('IU_form', this.entidad, 'SEARCH')
			.then((respuesta) => {

				this.cargar_formulario_html();
				document.getElementById('muestradatostabla').removeAttribute('class');

				document.getElementById("div_IU_form").style.display = 'none';

				this.datos = respuesta['resource'];
				this.atributos = Object.keys(respuesta['criteriosbusqueda']);

				this.crearTablaDatos();

				setLang();

			});
	}

	async ADD() {

		await this.access_functions.back_request('IU_form', this.entidad, 'DELETE')
			.then((respuesta) => {

				if (respuesta['ok']) {

					this.cargar_formulario();

					document.getElementById("div_IU_form").style.display = 'none';

					this.SEARCH();

				}
				else {

					this.abrirModalError(respuesta['code']);
				}

			});
	}

	async DELETE() {

		await this.access_functions.back_request('IU_form', this.entidad, 'DELETE')
			.then((respuesta) => {

				if (respuesta['ok']) {

					this.cargar_formulario();

					document.getElementById("div_IU_form").style.display = 'none';

					this.SEARCH();
				}
				else {
					this.abrirModalError(respuesta['code']);
				}

			});
	}

	async EDIT() {

		await this.access_functions.back_request('IU_form', this.entidad, 'EDIT')
			.then((respuesta) => {

				if (respuesta['ok']) {

					this.cargar_formulario();
					document.getElementById("div_IU_form").style.display = 'none';

					this.SEARCH();

				}
				else {
					this.abrirModalError(respuesta['code']);
				}

			});
	}

	colocarvalidaciones(accion) {
		const campos = document.forms['IU_form'].elements;

		for (let i = 0; i < campos.length; i++) {
			const campo = campos[i];

			if (!campo.id) continue;

			const tag = campo.tagName;
			const tipo = campo.type;
			let evento = 'onblur';

			if (tag === 'INPUT' && tipo === 'file') {
				evento = 'onchange';
			} else if (tag === 'SELECT' || tag === 'TEXTAREA') {
				evento = 'onblur';
			} else if (tag === 'INPUT' && tipo !== 'file') {
				evento = 'onblur';
			}

			let nombreFuncion = 'validar.comprobar_' + campo.id;
			if (accion === 'SEARCH') {
				nombreFuncion += '_SEARCH';
			}
			nombreFuncion += '();';

			campo.setAttribute(evento, nombreFuncion);
		}
	}

	colocarboton(accion) {

		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		document.getElementById('IU_form').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/' + accion + '.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);

	}

	ponernoactivoform() {
		const campos = document.forms['IU_form'].elements;

		for (let i = 0; i < campos.length; i++) {
			if (!campos[i].id) continue;
			document.getElementById(campos[i].id).setAttribute('readonly', true);
		}
	}

	crear_metodos_comprobar() {
		const estructura = eval('estructura_' + this.entidad);

		for (const atributo of estructura.attributes_list) {
			const def = estructura.attributes[atributo];

			// Si es ADD o EDIT y es PK, desactivamos el campo en el DOM
			if ((this.accion === 'ADD' || this.accion === 'EDIT') && def.is_pk === true) {
				const idCampo = 'id_' + atributo;
				const campo = document.getElementById(idCampo);
				if (campo) {
					campo.setAttribute('readonly', true);
				}
			}

			// Funciones estándar
			const nombreFuncion = 'comprobar_' + atributo;
			if (typeof this[nombreFuncion] !== 'function') {
				this[nombreFuncion] = () => {
					const resultado = Dom_validations.prototype.comprobar_generico.call(this, atributo, estructura, this.accion);
					if (resultado !== true) this.mostrar_error_campo(atributo, resultado);
					else this.mostrar_exito_campo(atributo);
					return resultado;
				};
			}

			// Funciones para SEARCH
			const nombreFuncionSEARCH = 'comprobar_' + atributo + '_SEARCH';
			if (typeof this[nombreFuncionSEARCH] !== 'function') {
				this[nombreFuncionSEARCH] = () => {
					const resultado = Dom_validations.prototype.comprobar_generico.call(this, atributo, estructura, 'SEARCH');
					if (resultado !== true) this.mostrar_error_campo(atributo, resultado);
					else this.mostrar_exito_campo(atributo);
					return resultado;
				};
			}

			// Comprobadores adicionales si es un campo tipo fichero
			const esFichero = atributo.includes('file') || def.html?.type === 'file';
			if (esFichero) {
				const nombreNuevo = 'nuevo_' + atributo;
				const nombreNuevoFuncion = 'comprobar_' + nombreNuevo;
				if (typeof this[nombreNuevoFuncion] !== 'function') {
					console.log('1');
					this[nombreNuevoFuncion] = () => {
						console.log('2');
						this.accion= 'ADD'; // Aseguramos que la acción es ADD para este caso
						const resultado = Dom_validations.prototype.comprobar_generico.call(this, nombreNuevo, estructura, this.accion);
						if (resultado !== true) this.mostrar_error_campo(nombreNuevo, resultado);
						else this.mostrar_exito_campo(nombreNuevo);
						return resultado;
					};
				}

				const nombreNuevoFuncionSEARCH = nombreNuevoFuncion + '_SEARCH';
				if (typeof this[nombreNuevoFuncionSEARCH] !== 'function') {
					this[nombreNuevoFuncionSEARCH] = () => {
						const resultado = Dom_validations.prototype.comprobar_generico.call(this, nombreNuevo, estructura, 'SEARCH');
						if (resultado !== true) this.mostrar_error_campo(nombreNuevo, resultado);
						else this.mostrar_exito_campo(nombreNuevo);
						return resultado;
					};
				}
			}
		}
	}


	comprobar_submit() {
		return Dom_validations.prototype.comprobar_submit.call(this);
	}

	comprobar_submit_SEARCH() {
		return Dom_validations.prototype.comprobar_submit_SEARCH.call(this);
	}


}
