class Dom extends test_IU {

    constructor() {

        super();

    }

    createForm() {

        document.getElementById('class_contenido_titulo_form').className = 'text_contenido_titulo_form_' + this.entidad + '_' + this.accion;

        this.cargar_formulario();

        this.change_value_IU();

        const estructura = eval('estructura_' + this.entidad);

        for (let atributo of estructura.attributes_list) {
            const def = estructura.attributes[atributo];

            const campos = [
                document.getElementById(atributo),
                document.getElementById('nuevo_' + atributo),
                ...Array.from(document.getElementsByName(atributo))
            ].filter(Boolean);

            if (campos.length === 0 || !def) continue;

            if (self.accion === 'DELETE' || self.accion === 'SHOWCURRENT') {
                campos.forEach(campo => {
                    campo.disabled = true;
                    campo.setAttribute('readonly', true);
                });
                continue;
            }

            if ((self.accion === 'ADD' || self.accion === 'EDIT') && def.is_pk) {
                campos.forEach(campo => {
                    campo.disabled = true;
                    campo.setAttribute('readonly', true);
                });
                continue;
            }

        }

        document.getElementById("div_IU_form").style.display = 'block';
        setLang();
    }

    cargar_formulario_dinamico() {
        const estructura = eval('estructura_' + this.entidad);
        const form = document.getElementById("IU_form");
        form.innerHTML = '';
        form.setAttribute('enctype', 'multipart/form-data'); // <-- Añade esto


        for (let atributo of estructura.attributes_list) {
            const def = estructura.attributes[atributo];
            console.log(def);
            if ((this.accion === 'ADD' || this.accion === 'EDIT') && def.is_pk && def.is_autoincrement) {
                continue;
            }
            if (!estructura.attributes.hasOwnProperty(atributo)) continue;

            const label = document.createElement('label');
            label.className = 'label_' + atributo;
            label.setAttribute('for', atributo);
            label.innerHTML = atributo;

            let input;

            if (def.html && def.html.tag === 'textarea') {
                input = document.createElement('textarea');
                input.id = atributo;
                input.name = atributo;
                if (def.html.rows) input.rows = def.html.rows;
                if (def.html.columns) input.cols = def.html.columns;
            }
            else if (def.html && def.html.tag === 'select' && Array.isArray(def.html.options)) {
                input = document.createElement('select');
                input.id = atributo;
                input.name = atributo;
                const emptyOption = document.createElement('option');
                emptyOption.value = '';
                emptyOption.textContent = 'Selecciona una opción';
                input.appendChild(emptyOption);
                for (const opt of def.html.options) {
                    const option = document.createElement('option');
                    if (typeof opt === 'object') {
                        option.value = opt.value;
                        option.textContent = opt.label || opt.value;
                    } else {
                        option.value = opt;
                        option.textContent = opt;
                    }
                    input.appendChild(option);
                }
            }
            else if (def.html && def.html.type === 'file' && this.accion !== 'SEARCH') {
                input = document.createElement('input');
                input.type = 'file';
                input.id = atributo;
                input.name = atributo;

                const fileWrapper = document.createElement('div');
                fileWrapper.style.display = 'inline-block';

                const customButton = document.createElement('button');
                customButton.type = 'button';
                customButton.innerText = 'Seleccionar archivo';
                customButton.onclick = function () {
                    input.click();
                };

                const fileNameSpan = document.createElement('span');
                fileNameSpan.id = atributo + '_filename';
                fileNameSpan.style.marginLeft = '10px';

                input.onchange = function () {
                    fileNameSpan.textContent = input.files.length > 0 ? input.files[0].name : '';
                };

                input.style.opacity = 0;
                input.style.position = 'absolute';
                input.style.left = '-9999px';

                fileWrapper.appendChild(customButton);
                fileWrapper.appendChild(input);
                fileWrapper.appendChild(fileNameSpan);

                // Crear div de error para el campo file
                const divError = document.createElement('div');
                divError.id = 'div_error_' + atributo;
                divError.style.display = 'none';
                divError.className = 'errorcampo';

                form.appendChild(label);
                form.appendChild(document.createElement('br'));
                form.appendChild(fileWrapper);
                form.appendChild(document.createElement('br'));
                form.appendChild(divError);
                form.appendChild(document.createElement('br'));
                continue;
            }
            // Input normal
            else {
                input = document.createElement('input');
                input.id = atributo;
                input.name = atributo;
                input.type = (def.html && def.html.type) ? def.html.type : 'text';
            }

            // Crear div de error para el campo
            const divError = document.createElement('div');
            divError.id = 'div_error_' + atributo;
            divError.style.display = 'none';
            divError.className = 'errorcampo';

            form.appendChild(label);
            form.appendChild(document.createElement('br'));
            form.appendChild(input);
            form.appendChild(document.createElement('br'));
            form.appendChild(divError);
            form.appendChild(document.createElement('br'));
        }
    }

    load_data() {
        for (let clave in this.datos) {
            const elemento = document.getElementById(clave);
            if (elemento) {
                // Si es un campo de fecha
                if (typeof this.datos[clave] === 'string' && this.datos[clave].match(/^\d{4}[-/]\d{2}[-/]\d{2}$/)) {
                    const [y, m, d] = this.datos[clave].split(/[-/]/);
                    elemento.value = `${d}/${m}/${y}`;
                }
                else if (elemento.type === 'file') {
                    let fileNameSpan = document.getElementById(clave + '_filename');
                    if (!fileNameSpan) {
                        fileNameSpan = document.createElement('span');
                        fileNameSpan.id = clave + '_filename';
                        fileNameSpan.style.marginLeft = '10px';
                        elemento.parentNode.insertBefore(fileNameSpan, elemento.nextSibling);
                    }
                    if (this.datos[clave]) {
                        fileNameSpan.textContent = this.datos[clave];
                    } else {
                        fileNameSpan.textContent = '';
                    }
                }
                else {
                    elemento.value = this.datos[clave];
                }
            }
        }

    }
    /*
    mostrar_error_campo(id, codigoerror) {
        document.getElementById('div_error_' + id).style.display = 'inline';
        document.getElementById('div_error_' + id).innerHTML = codigoerror;
        document.getElementById('div_error_' + id).className = codigoerror;
        document.getElementById(id).className = 'errorcampo';
        document.getElementById('submit_button');
        document.getElementById('submit_button').focus();
        setLang();
    }*/
    mostrar_error_campo(id, codigoerror) {
        document.getElementById('div_error_' + id).style.display = 'inline';
        document.getElementById('div_error_' + id).innerHTML = codigoerror;
        document.getElementById('div_error_' + id).className = codigoerror;
        document.getElementById(id).className = 'errorcampo';
        const submitBtn = document.getElementById('submit_button');
        if (submitBtn) {
            submitBtn.focus();
        }
        setLang();
    }

    mostrar_exito_campo(id) {
        document.getElementById('div_error_' + id).style.display = 'none';
        document.getElementById('div_error_' + id).innerHTML = '';
        document.getElementById(id).className = 'exitocampo';
    }

    modificarcolumnasamostrar(atributo) {
        let nuevascolumnas = Array();
        if (this.columnasamostrar.includes(atributo)) {
            for (let i = 0; i < this.columnasamostrar.length; i++) {
                if (this.columnasamostrar[i] == atributo) { }
                else {
                    nuevascolumnas.push(this.columnasamostrar[i]);
                }
            }
            this.columnasamostrar = nuevascolumnas;
        }
        else {
            this.columnasamostrar.push(atributo);
        }
        this.createTabla();
    }

    mostrarocultarcolumnas() {
        for (let columna of this.atributos) {
            if (this.columnasamostrar.includes(columna)) { }
            else {
                document.querySelector("th[class='" + columna + "']").style.display = 'none';
                let arraytds = document.querySelectorAll("td[class='tabla-td-" + columna + "']");
                for (let i = 0; i < arraytds.length; i++) {
                    arraytds[i].style.display = 'none';
                }
            }
        }
    }

    construirSelect() {
        document.getElementById("seleccioncolumnas").innerHTML = '';
        let optionselect = '';
        for (let atributo of this.atributos) {
            optionselect = document.createElement('option');
            optionselect.className = atributo;
            optionselect.innerHTML = atributo;
            optionselect.setAttribute("onclick", "validar.modificarcolumnasamostrar('" + atributo + "');");
            if (this.columnasamostrar.includes(atributo)) {
                optionselect.selected = true;
            }
            document.getElementById("seleccioncolumnas").append(optionselect);
        }
        setLang();
    }

    createTabla() { //Antiguo método hacertabla()

        document.getElementById("text_title_page").className = "text_titulo_page_" + this.entidad;
        document.getElementById('title_page').style.display = 'block';

        if (!this.datos || this.datos.length === 0) {
            document.getElementById("id_tabla_datos").style.display = 'block';
            document.getElementById('titulostablacabecera').innerHTML = '';
            document.getElementById('muestradatostabla').innerHTML = '';
            document.getElementById('muestradatostabla').className = 'RECORDSET_VACIO';
        }
        else {

            var textolineatitulos = '<tr>';

            for (let atributo of this.atributos) {

                textolineatitulos += '<th class="' + atributo + '">' + atributo + '</th>';

            }

            textolineatitulos += '<th colspan="3"></th>';

            textolineatitulos += '</tr>';

            let cabecera = document.getElementById("titulostablacabecera");
            cabecera.innerHTML = textolineatitulos;

            var textolineadatos = '';

            for (let i = 0; i < this.datos.length; i++) {

                textolineadatos += '<tr style="background-color:grey;">';

                for (let clave in this.datos[i]) {

                    if (this.datosespecialestabla.includes(clave)) {
                        let valorcolumna = this.cambiardatosespecialestabla(clave, this.datos[i][clave]);
                        textolineadatos += '<td class="tabla-td-' + clave + '">' + valorcolumna + '</td>';
                    }
                    else {
                        textolineadatos += '<td class="tabla-td-' + clave + '">' + this.datos[i][clave] + '</td>';
                    }

                }

                let lineaedit = this.crearboton(this.entidad, 'EDIT', JSON.stringify(this.datos[i]));
                let lineadelete = this.crearboton(this.entidad, 'DELETE', JSON.stringify(this.datos[i]));
                let lineashowcurrent = this.crearboton(this.entidad, 'SHOWCURRENT', JSON.stringify(this.datos[i]));

                textolineadatos += lineaedit + lineadelete + lineashowcurrent;

                textolineadatos += '</tr>';

            }

            let cuerpo = document.getElementById('muestradatostabla');
            cuerpo.innerHTML = textolineadatos;
        }

        this.construirSelect();
        this.mostrarocultarcolumnas();

        setLang();

    }


    crearboton(entidad, accion, parametros) {
        let columna = document.createElement('td');
        let opcion = document.createElement('img');
        opcion.src = "./iconos/" + accion + '.png';
        let textoonclick = "validar.createForm_" + accion + "(" + parametros + ");"
        opcion.setAttribute('onclick', textoonclick);
        columna.appendChild(opcion);
        return columna.outerHTML;
    }


    cerrar_formulario() {
        document.getElementById("IU_form").innerHTML = '';
        document.getElementById("IU_form").setAttribute('onsubmit', "");
        document.getElementById("IU_form").setAttribute('action', "");
        document.getElementById("div_IU_form").style.display = 'none';
    }

    cerrar_test() {
        document.getElementById('div_IU_test').style.display = 'none';
        document.getElementById('resultadodef').innerHTML = '';
        document.getElementById('tablaresultadostest').innerHTML = '';
        document.getElementById('resultadoprueba').innerHTML = '';
        document.getElementById('tablaresultadosprueba').innerHTML = '';
        document.getElementById('resultadotest').innerHTML = '';
        document.getElementById('salidaresultadosprueba').innerHTML = '';
    }

    cerrar_tabla() {
        document.getElementById("titulostablacabecera").innerHTML = '';
        document.getElementById("muestradatostabla").innerHTML = '';
        document.getElementById("id_tabla_datos").style.display = 'none';
        document.getElementById("title_page").style.display = 'none';

        this.ocultar_boton_test();
        this.cerrar_test();
    }

    ocultar_boton_test() {
        document.getElementById('botonTEST').style.display = 'none';
    }

    mostrar_boton_test() {
        document.getElementById('botonTEST').style.display = 'inline';
    }

    abrirModalError(errorMsg) {
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';

        const msgContainer = document.getElementById('error_action_msg');
        msgContainer.className = errorMsg;
        msgContainer.innerText = errorMsg || 'Ha ocurrido un error desconocido';

        setLang();
    }

    cerrarModalError() {
        document.getElementById('error_action_modal').style.display = 'none';
        document.getElementById('modal_action_overlay').style.display = 'none';
    }

} 
