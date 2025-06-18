class test_IU {

    constructor() {
        this.mostrar_boton_test();
    }

    test_run() {
        document.getElementById('div_IU_test').style.display = 'block';
        document.getElementById('resultadodef').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadoprueba').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';

        this.array_def = eval(`${this.entidad}_def_tests`);
        this.array_pruebas = eval(`${this.entidad}_tests`);
        this.array_pruebas_file = eval(`${this.entidad}_tests_files`);

        this.verificarDefTest();
        this.verificarPruebas();
        this.verificarPruebas_file();

        this.test_entidad();
        this.test_entidad_files();
    }

    test_entidad() {

        // Título de la tabla de resultados
        let salidatest = `<tr>
        <th>NumDefTest</th>
        <th>NumPrueba</th>
        <th>Campo</th>
        <th>Prueba</th>
        <th>Acción</th>
        <th>Valor</th>
        <th>Respuesta Test</th>
        <th>Respuesta esperada</th>
        <th>Resultado</th>
    </tr>`;

        for (let i = 0; i < this.array_pruebas.length; i++) {
            // Cargar formulario limpio
            this.cargar_formulario_html();
            validar.crear_metodos_comprobar();

            // Añadir botón submit para evitar errores de validación
            let botonsumit = document.createElement('input');
            botonsumit.id = 'submit_button';
            document.getElementById('IU_form').appendChild(botonsumit);

            // Extraer datos de la prueba
            let campotest = this.array_pruebas[i][1];
            let numdeftest = this.array_pruebas[i][2];
            let numprueba = this.array_pruebas[i][3];
            let acciontest = this.array_pruebas[i][4];
            let valortest = this.array_pruebas[i][5];
            let respuestatest = this.array_pruebas[i][6];
            let respuestaesperada = this.array_pruebas[i][7];

            // Recuperar definición de la prueba
            let def = this.devolver_def(numdeftest);

            // Insertar valor en el campo correspondiente
            let campoInput = document.getElementById(campotest);
            if (campoInput) campoInput.value = valortest;

            // Si el campo es de fecha y hay valor relacionado, ponlo en el campo relacionado
            let valorRelacionado = this.array_pruebas[i][6];
            if (campotest === 'end_date_project' && valorRelacionado) {
                let campoRelacionado = document.getElementById('start_date_project');
                if (campoRelacionado) campoRelacionado.value = valorRelacionado;
            }
            if (campotest === 'start_date_project' && valorRelacionado) {
                let campoRelacionado = document.getElementById('end_date_project');
                if (campoRelacionado) campoRelacionado.value = valorRelacionado;
            }

            // Ejecutar la función de validación correspondiente
            let resultadotest;
            if (acciontest === 'SEARCH') {
                resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()');
            } else {
                this.accion = acciontest;
                resultadotest = eval('this.comprobar_' + campotest + '()');
            }

            // Comparar resultado con el esperado
            let resultadoestetest = (respuestaesperada == resultadotest) ? 'CORRECTO' : 'INCORRECTO';

            // Construir la fila de salida
            let lineasalida = `<tr>
            <td>${numdeftest}</td>
            <td>${numprueba}</td>
            <td>${campotest}</td>
            <td>${def ? def[3] : ''}</td>
            <td>${acciontest}</td>
            <td>${valortest}</td>
            <td>${resultadotest}</td>
            <td>${respuestaesperada}</td>
            <td>${resultadoestetest}</td>
        </tr>`;
            salidatest += lineasalida;
        }

        // Mostrar resultados
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';
    }

    test_entidad_files() {

        // Título de la tabla de resultados
        let salidatest = `<tr>
        <th>NumDefTest</th>
        <th>NumPrueba</th>
        <th>Campo</th>
        <th>Parámetro</th>
        <th>Acción</th>
        <th>Valor</th>
        <th>Respuesta Test</th>
        <th>Respuesta esperada</th>
        <th>Resultado</th>
    </tr>`;

        for (let i = 0; i < this.array_pruebas_file.length; i++) {
            // Cargar formulario limpio
            this.cargar_formulario_html();
            validar.crear_metodos_comprobar();

            // Añadir botón submit para evitar errores de validación
            let botonsumit = document.createElement('input');
            botonsumit.id = 'submit_button';
            document.getElementById('IU_form').appendChild(botonsumit);

            // Extraer datos de la prueba según la estructura correcta
            let entidad = this.array_pruebas_file[i][0];
            let campotest = this.array_pruebas_file[i][1];
            let numdeftest = this.array_pruebas_file[i][2];
            let numprueba = this.array_pruebas_file[i][3];
            let acciontest = this.array_pruebas_file[i][4];
            let parametro = this.array_pruebas_file[i][5];
            let valortest = this.array_pruebas_file[i][6];
            let respuestaesperada = this.array_pruebas_file[i][7];

            // Recuperar definición de la prueba
            let def = this.devolver_def(numdeftest);

            // Simular la carga del fichero en el input correspondiente si corresponde
            const nombreInput = 'nuevo_' + campotest;
            const inputFile = document.getElementById(nombreInput);

            if (parametro === 'max_size_file' || parametro === 'type_file' || parametro === 'format_name_file') {
                if (Array.isArray(valortest) && valortest.length === 3) {
                    // valortest = [nombre, tipo, tamaño]
                    const file = new File([new ArrayBuffer(valortest[2])], valortest[0], {
                        type: valortest[1]
                    });
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    if (inputFile) inputFile.files = dataTransfer.files;
                } else if (inputFile) {
                    // Si no hay fichero, asegúrate de que el input está vacío
                    inputFile.value = '';
                }
            }

            // Ejecutar la función de validación correspondiente
            let resultadotest;
            try {
                if (acciontest === 'SEARCH') {
                    resultadotest = eval('this.comprobar_' + campotest + '_SEARCH()');
                } else {
                    resultadotest = eval('this.comprobar_' + campotest + '()');
                }
            } catch (e) {
                resultadotest = 'ERROR_NO_FUNCION';
            }

            // Comparar resultado con el esperado
            let resultadoestetest = (respuestaesperada == resultadotest) ? 'CORRECTO' : 'INCORRECTO';

            // Construir la fila de salida
            let lineasalida = `<tr>
            <td>${numdeftest}</td>
            <td>${numprueba}</td>
            <td>${campotest}</td>
            <td>${parametro}</td>
            <td>${acciontest}</td>
            <td>${JSON.stringify(valortest)}</td>
            <td>${resultadotest}</td>
            <td>${respuestaesperada}</td>
            <td>${resultadoestetest}</td>
        </tr>`;
            salidatest += lineasalida;
        }

        // Mostrar resultados
        document.getElementById('salidaresultadosprueba').innerHTML += salidatest;
        document.getElementById('resultadopruebas').style.display = 'block';
    }

    devolver_def(num_def) {
        return this.array_def.find(def => def[2] === num_def);
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let c of ca) {
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }

    traduccion(codigo) {
        const lang = this.getCookie('lang');
        const trads = (lang === 'EN') ? textos_EN : textos_ES;
        return trads?.[codigo] || codigo;
    }

    verificarDefTest() {
        const probe_def = this.array_def;
        let filacorrecta = true;

        let tabla = "<tr><th>Entidad</th><th>Campo</th><th>Num. Def</th><th colspan='7'>Tipos</th><th>Resultado</th></tr>";

        probe_def.forEach(el => {
            let fila = `<tr><td>${el[0]}</td><td>${el[1]}</td><td>${el[2]}</td>`;
            for (let i = 0; i < 7; i++) fila += `<td>${typeof el[i]}</td>`;
            const ok = (
                typeof el[0] === 'string' &&
                typeof el[1] === 'string' &&
                typeof el[2] === 'number' &&
                typeof el[3] === 'string' &&
                typeof el[4] === 'string' &&
                (typeof el[5] === 'string' || typeof el[5] === 'boolean') &&
                typeof el[6] === 'string'
            );
            fila += `<td>${ok ? 'CORRECTA' : 'ERROR'}</td></tr>`;
            tabla += fila;
            if (!ok) filacorrecta = false;
        });

        document.getElementById('tablaresultadostest').innerHTML += tabla;
        if (filacorrecta) document.getElementById('resultadodef').innerText = 'formato correcto en las pruebas de test';
        document.getElementById('contenidoTests').style.display = 'block';
    }

    verificarPruebas() {
        const probe = this.array_pruebas;
        let filacorrecta = true;

        let tabla = "<tr><th>Entidad</th><th>Campo</th><th>Num. Def</th><th>Num. Prueba</th><th colspan='6'>Tipos</th><th>Resultado</th></tr>";

        probe.forEach(el => {
            let fila = `<tr><td>${el[0]}</td><td>${el[1]}</td><td>${el[2]}</td><td>${el[3]}</td>`;
            for (let i = 0; i < 7; i++) fila += `<td>${typeof el[i]}</td>`;
            const ok = (
                typeof el[0] === 'string' &&
                typeof el[1] === 'string' &&
                typeof el[2] === 'number' &&
                typeof el[3] === 'number' &&
                typeof el[4] === 'string' &&
                typeof el[5] === 'string' &&
                (typeof el[6] === 'string' || typeof el[6] === 'boolean')
            );
            fila += `<td>${ok ? 'CORRECTA' : 'ERROR'}</td></tr>`;
            tabla += fila;
            if (!ok) filacorrecta = false;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += tabla;
        if (filacorrecta) document.getElementById('resultadoprueba').innerText = 'formato correcto en las pruebas';
        document.getElementById('contenidoPruebas').style.display = 'block';
    }

    verificarPruebas_file() {
        const probe = this.array_pruebas_file;
        let filacorrecta = true;

        let tabla = "<tr><th>Entidad</th><th>Campo</th><th>Num. Def</th><th>Num. Prueba</th><th colspan='8'>Tipos</th><th>Resultado</th></tr>";

        probe.forEach(el => {
            let fila = `<tr><td>${el[0]}</td><td>${el[1]}</td><td>${el[2]}</td><td>${el[3]}</td>`;
            for (let i = 0; i < 8; i++) fila += `<td>${typeof el[i]}</td>`;
            const ok = (
                typeof el[0] === 'string' &&
                typeof el[1] === 'string' &&
                typeof el[2] === 'number' &&
                typeof el[3] === 'number' &&
                typeof el[4] === 'string' &&
                typeof el[5] === 'string' &&
                typeof el[6] === 'object' &&
                (typeof el[7] === 'string' || typeof el[7] === 'boolean')
            );
            fila += `<td>${ok ? 'CORRECTA' : 'ERROR'}</td></tr>`;
            tabla += fila;
            if (!ok) filacorrecta = false;
        });

        document.getElementById('tablaresultadosprueba').innerHTML += tabla;
        if (filacorrecta) document.getElementById('resultadoprueba').innerText = 'formato correcto en las pruebas';
        document.getElementById('contenidoPruebas').style.display = 'block';
    }

}