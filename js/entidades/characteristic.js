class characteristic extends Entidad_Abstracta {

    constructor() {
        super();
        this.entidad = 'characteristic';
        this.inicializar();
    }
/*
    cargar_formulario_html() {
        this.accion = '';

        let formulario = `
            <label class="id_characteristic" for="id_characteristic"></label>
            <input type="text" id="id_characteristic" name="id_characteristic"/>
            <div id="div_error_id_characteristic" class="error"></div>

            <label class="name_characteristic" for="name_characteristic"></label>
            <input type="text" id="name_characteristic" name="name_characteristic"/>
            <div id="div_error_name_characteristic" class="error"></div>

            <label class="description_characteristic" for="description_characteristic"></label>
            <input type="text" id="description_characteristic" name="description_characteristic"></input>
            <div id="div_error_description_characteristic" class="error"></div>

            <label class="data_type_characteristic" for="data_type_characteristic"></label>
            <select id="data_type_characteristic" name="data_type_characteristic">
            <option value="">Selecciona una opción</option>
            <option value="number">number</option>
            <option value="text">text</option>
            <option value="set">set</option>
            </select>
            <div id="div_error_data_type_characteristic" class="error"></div>

            <label class="category_characteristic" for="category_characteristic"></label>
            <select id="category_characteristic" name="category_characteristic">
            <option value="">Selecciona una opción</option>
            <option value="soil_site">soil_site</option>
            <option value="soil_chem">soil_chem</option>
            <option value="soil_bio">soil_bio</option>
            </select>
            <div id="div_error_category_characteristic" class="error"></div>

            <label class="bibref_characteristic" for="bibref_characteristic"></label>
            <input type="text" id="bibref_characteristic" name="bibref_characteristic"/>
            <div id="div_error_bibref_characteristic" class="error"></div>

            <label id="label_file_characteristic" class="file_characteristic"></label>
           <!-- <input type="text" id="file_characteristic" name="file_characteristic"><br>-->
			<a id="link_file_characteristic" href="http://193.147.87.202/ET2/filesuploaded/files_file_characteristic/file_characteristic"><img src="./iconos/FILE.png"/></a> <br>
			<label id="label_nuevo_file_characteristic" class="nuevo_file_characteristic"></label>
			<input type="file" id="nuevo_file_characteristic" name="nuevo_file_characteristic">
			<span id="div_error_nuevo_file_characteristic"><a id="error_nuevo_file_characteristic"></a></span>

            <br>
        `;
        document.getElementById("IU_form").innerHTML = formulario;
        setLang();
    }*/
}