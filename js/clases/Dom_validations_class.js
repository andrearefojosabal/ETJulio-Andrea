class Dom_validations extends Dom {

    comprobar_generico(campo, estructura, accion) {
        let nombreBase = campo;
        if (campo.startsWith('nuevo_')) {
            nombreBase = campo.substring(6);
        }

        const atributo = estructura.attributes[nombreBase];

        if (!atributo || !atributo.validation_rules || !atributo.validation_rules[accion]) {
            return true;
        }

        const reglas = atributo.validation_rules[accion];
        const validaciones = new Validaciones_Atomicas();
        let resultado;

        for (const tipo in reglas) {
            const valor = reglas[tipo];
            switch (tipo) {
                case 'min_size':
                    resultado = validaciones.min_size(campo, valor[0]);
                    if (!resultado) return valor[1];
                    break;
                case 'max_size':
                    resultado = validaciones.max_size(campo, valor[0]);
                    if (!resultado) return valor[1];
                    break;
                case 'format':
                    resultado = validaciones.format(campo, valor[0]);
                    if (!resultado) return valor[1];
                    break;
                case 'no_file':
                    console.log('OK');
                    resultado = validaciones.no_file(document.getElementById(campo).files[0]);
                    if (!resultado) return valor;
                    break;
                case 'file_type':
                    const tiposArray = valor[0].replace(/'/g, "").split(',').map(t => t.trim());
                    resultado = validaciones.file_type(document.getElementById(campo).files[0], tiposArray);
                    if (!resultado) return valor[1];
                    break;
                case 'max_size_file':
                    resultado = validaciones.max_size_file(document.getElementById(campo).files[0], valor[0]);
                    if (!resultado) return valor[1];
                    break;
                case 'format_name_file':
                    resultado = validaciones.format_name_file(document.getElementById(campo).files[0], valor[0]);
                    if (!resultado) return valor[1];
                    break;
                case 'personalized':
                    // igual que antes
                    let match = valor.match(/^([a-zA-Z0-9_]+)\((.*)\)$/);
                    if (match) {
                        let methodName = match[1];
                        let params = match[2]
                            .split(',')
                            .map(p => p.trim())
                            .map(p => {
                                if (p.startsWith('$')) {
                                    let campoParam = p.substring(1);
                                    let el = document.getElementById(campoParam);
                                    return el ? el.value : '';
                                } else if (p === '') {
                                    return undefined;
                                } else {
                                    return p.replace(/^['"]|['"]$/g, '');
                                }
                            });
                        if (typeof validar[methodName] === 'function') {
                            resultado = validar[methodName](...params);
                            if (resultado !== true) return resultado;
                        }
                    }
                    break;
            }
        }

        return true;
    }


    load_validations() {
        let resultadoGlobal = true;
        const estructura = eval("estructura_" + validar.entidad);
        const accion = validar.accion;

        for (const campo of estructura.attributes_list) {
            const resultado = this.comprobar_generico(campo, estructura, accion);

            if (resultado !== true) {
                validar.mostrar_error_campo(campo, resultado);
                resultadoGlobal = false;
            } else {
                validar.mostrar_exito_campo(campo);
            }
        }

        this.check_special_tests();

        return resultadoGlobal;
    }

    submit_test() {

        if (this.load_validations()) {

            new ExternalAccess().back_request('IU_form', validar.entidad, validar.accion).then((res) => {

                if (res.ok === true) {
                    validar.abrirModalError("OK");
                    document.getElementById("IU_form").reset();
                } else {
                    validar.abrirModalError(res.code || 'ERROR_DESCONOCIDO');
                }
            }).catch((error) => {
                console.error('❌ Error durante la petición AJAX:', error);
                validar.abrirModalError('ERROR_CONEXION_BACKEND');
            });
        } else {
            console.warn('⚠️ El formulario no pasó las validaciones. No se enviará.');
        }
    }



    check_special_tests() {
        if (typeof validar === 'undefined') {
            console.warn("La variable global 'validar' no está definida.");
            return;
        }

        const estructura = eval("estructura_" + validar.entidad);

        for (const campo of estructura.attributes_list) {
            const methodName = 'check_special_' + campo;
            if (typeof validar[methodName] === 'function') {
                validar[methodName]();
            }
        }
    }

    comprobar_submit() {
        const estructura = eval('estructura_' + validar.entidad);
        let resultadoGlobal = true;

        for (const campo of estructura.attributes_list) {
            const metodo = 'comprobar_' + campo;
            if (typeof validar[metodo] === 'function') {
                const resultado = validar[metodo]();
                if (!resultado) resultadoGlobal = false;
            }
        }

        validar.check_special_tests();

        return resultadoGlobal;
    }

    comprobar_submit_SEARCH() {
        const estructura = eval('estructura_' + validar.entidad);
        let resultadoGlobal = true;

        for (const campo of estructura.attributes_list) {
            const metodo = 'comprobar_' + campo + '_SEARCH';
            if (typeof validar[metodo] === 'function') {
                const resultado = validar[metodo]();
                if (!resultado) resultadoGlobal = false;
            }
        }

        validar.check_special_tests();

        return resultadoGlobal;
    }

}