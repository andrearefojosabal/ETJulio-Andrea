class analysis_preparation extends Entidad_Abstracta {

	constructor() {
		super();
		this.entidad = 'analysis_preparation';
		this.inicializar();
	}

	cargar_formulario_html() {

		this.accion = '';

		let formulario = `

			<label class="label_id_analysis_preparation">id_analysis_preparation</label>
			<input type='text' id='id_analysis_preparation' name='id_analysis_preparation'></input>
			<span id="div_error_id_analysis_preparation"><a id="error_id_analysis_preparation"></a></span>
			<br>
		
			<label class="label_name_analysis_preparation">name_analysis_preparation</label>
			<input type='text' id='name_analysis_preparation' name='name_analysis_preparation'></input>
			<span id="div_error_name_analysis_preparation"><a id="error_name_analysis_preparation"></a></span>
			<br>

			<label class="label_description_analysis_preparation">description_analysis_preparation</label>
			<input type='text' id='description_analysis_preparation' name='description_analysis_preparation'></input>
			<span id="div_error_description_analysis_preparation"><a id="error_description_analysis_preparation"></a></span>
			<br>

			<label class="label_bib_analysis_preparation">bib_analysis_preparation</label>
			<input type='text' id='bib_analysis_preparation' name='bib_analysis_preparation'></input>
			<span id="div_error_bib_analysis_preparation"><a id="error_bib_analysis_preparation"></a></span>
			<br>

			<label id="label_file_analysis_preparation" class="file_analysis_preparation"></label>
            <input type="text" id="file_analysis_preparation" name="file_analysis_preparation"><br>
			<a id="link_file_analysis_preparation" href="http://193.147.87.202/ET2/filesuploaded/files_file_analysis_preparation/file_analysis_preparation"><img src="./iconos/FILE.png"/></a> <br>
			<label id="label_nuevo_file_analysis_preparation" class="nuevo_file_analysis_preparation"></label>
			<input type="file" id="nuevo_file_analysis_preparation" name="nuevo_file_analysis_preparation">
			<span id="div_error_nuevo_file_analysis_preparation"><a id="error_nuevo_file_analysis_preparation"></a></span>
			<br>
		`;

		document.getElementById("IU_form").innerHTML = formulario;
		setLang();

	}
}