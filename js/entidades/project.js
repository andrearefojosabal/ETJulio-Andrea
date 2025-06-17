class project extends Entidad_Abstracta {

	constructor() {
		super();
		this.entidad = 'project';
		this.inicializar();

	}

	cargar_formulario_html() {

		this.accion = '';

		let formulario = `
			
			<label class="label_id_project">id_project</label>
			<input type='text' id='id_project' name='id_project'></input>
			<span id="div_error_id_project"><a id="error_id_project"></a></span>
			<br>
		
			<label class="label_name_project">name_project</label>
			<input type='text' id='name_project' name='name_project'></input>
			<span id="div_error_name_project"><a id="error_name_project"></a></span>
			<br>

			<label class="label_start_date_project">start_date_project</label>
			<input type='text' id='start_date_project' name='start_date_project'></input>
			<span id="div_error_start_date_project" ><a id="error_start_date_project"></a></span>
			<br>

			<label class="label_end_date_project">end_date_project</label>
			<input type='text' id='end_date_project' name='end_date_project'></input>
			<span id="div_error_end_date_project" ><a id="error_end_date_project"></a></span>
			<br>

			<label class="label_responsable_project">responsable_project</label>
			<input type='text' id='responsable_project' name='responsable_project'></input>
			<span id="div_error_responsable_project"><a id="error_responsable_project"></a></span>
			<br>

			<label class="label_organization_project">organization_project</label>
			<input type='text' id='organization_project' name='organization_project'></input>
			<span id="div_error_organization_project"><a id="error_organization_project"></a></span>
			<br>

			<label class="label_description_project">description_project</label>
			<input type='text' id='description_project' name='description_project'></input>
			<span id="div_error_description_project" ><a id="error_description_project"></a></span>
			<br>

			<label id="label_file_project" class="file_project"></label>
			<input type="text" id="file_project" name="file_project"><br>
			<a id="link_file_project" href="http://193.147.87.202/ET2/filesuploaded/files_file_project/file_project"><img src="./iconos/FILE.png"/></a> <br>
			<label id="label_nuevo_file_project" class="nuevo_file_project"></label>
			<input type="file" id="nuevo_file_project" name="nuevo_file_project">
			<span id="div_error_nuevo_file_project"><a id="error_nuevo_file_project"></a></span>
			<br>

			<label class="label_code_project">code_project</label>
			<input type='text' id='code_project' name='code_project'></input>
			<span id="div_error_code_project"><a id="error_code_project"></a></span>
			<br>

			<label class="label_acronym_project">acronym_project</label>
			<input type='text' id='acronym_project' name='acronym_project'></input>
			<span id="div_error_acronym_project"><a id="error_acronym_project"></a></span>
			<br>

			<label class="label_id_sampling_methodology">id_sampling_methodology</label>
			<input type='text' id='id_sampling_methodology' name='id_sampling_methodology'></input>
			<span id="div_error_id_sampling_methodology"><a id="error_id_sampling_methodology"></a></span>
			
			<br>
		`;

		document.getElementById("IU_form").innerHTML = formulario;
		setLang();
	}

	check_special_end_date_project(start_date_project) {
		const start = document.getElementById('start_date_project').value;
		const end = document.getElementById('end_date_project').value;
		if (start && end) {
			// Si el formato es dd/mm/aaaa, conviértelo a yyyy-mm-dd para comparar
			const [sd, sm, sy] = start.split('/');
			const [ed, em, ey] = end.split('/');
			const startDate = new Date(`${sy}-${sm}-${sd}`);
			const endDate = new Date(`${ey}-${em}-${ed}`);
			
			if (endDate < startDate) {
				// Para tests automáticos, devuelve el código de error
				return 'end_date_project_before_start_KO';
			}
		}
		return true;
	}

	check_special_start_date_project(end_date_project) {
		const start = document.getElementById('start_date_project').value;
		const end = document.getElementById('end_date_project').value;

		if (start && end) {
			const [sd, sm, sy] = start.split('/');
			const [ed, em, ey] = end.split('/');
			const startDate = new Date(`${sy}-${sm}-${sd}`);
			const endDate = new Date(`${ey}-${em}-${ed}`);
			if (startDate > endDate) {
				return 'start_date_project_after_end_KO';
			}
		}
		return true;
	}
}