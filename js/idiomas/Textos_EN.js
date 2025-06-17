let textos_EN = {

	// titles and general texts
	'text_titulo_app': 'ET2 UI Interface',
	'text_titulo_menu': 'Menu Options',
	'text_titulo_pie': 'Footer',

	'SQL_OK': 'Operation completed successfully',
	'SQL_KO': 'Operation failed due to an error; some data was not sent in the correct format',
	'RECORDSET_VACIO': 'No data found for the search',
	'RECORDSET_DATOS': 'Data related to the search:',

	'id_analysis_preparation_es_nulo_KO': 'The id was not received correctly',
	'name_analysis_preparation_es_nulo_KO': 'The name was not received correctly',
	'description_analysis_preparation_es_nulo_KO': 'The description was not received correctly',
	'bib_analysis_preparation_es_nulo_KO': 'The bib was not received correctly',
	'nuevo_file_analysis_preparation_es_nulo_KO': 'The file was not received correctly',
	'link_file_analysis_preparation_es_nulo_KO': 'The file link was not received correctly',

	'id_project_es_nulo_KO': 'The id was not received correctly',
	'name_project_es_nulo_KO': 'The name was not received correctly',
	'start_date_project_es_nulo_KO': 'The project start date was not received correctly',
	'end_date_project_es_nulo_KO': 'The project end date was not received correctly',
	'responsable_project_es_nulo_KO': 'The person in charge was not received correctly',
	'organization_project_es_nulo_KO': 'The organization was not received correctly',
	'description_project_es_nulo_KO': 'The description was not received correctly',
	'nuevo_file_project_es_nulo_KO': 'The new file was not received correctly',
	'file_project_es_nulo_KO': 'The file id was not received correctly',
	'code_project_es_nulo_KO': 'The code was not received correctly',
	'acronym_project_es_nulo_KO': 'The acronym was not received correctly',
	'id_sampling_methodology_es_nulo_KO': 'The methodology id was not received correctly',
	'link_file_project_es_nulo_KO': 'The file link was not received correctly',

	'id_characteristic_es_nulo_KO': 'The id was not received correctly',
	'name_characteristic_es_nulo_KO': 'The name was not received correctly',
	'description_characteristic_es_nulo_KO': 'The description was not received correctly',
	'data_type_characteristic': 'The data type was not received correctly',
	'category_characteristic': 'The category was not received correctly',
	'bibref_characteristic_es_nulo_KO': 'The bibref was not received correctly',
	'link_file_characteristic_es_nulo_KO': 'The file link was not received correctly',
	'nuevo_file_characteristic_es_nulo_KO': 'The file id was received correctly',
	'file_characteristic_es_nulo_KO': 'The file id was not received correctly',

	'true': 'The entered value is correct',

	/* ANALYSIS PREPARATION ------------------------------------------------- */
	'text_analysis_prep': 'Analysis Preparation',
	'text_titulo_page_analysis_preparation': 'Analysis Preparation Management',
	'text_contenido_titulo_form_analysis_preparation_ADD': 'Add Analysis Preparation Form',
	'text_contenido_titulo_form_analysis_preparation_EDIT': 'Edit Analysis Preparation Form',

	// attributes
	'id_analysis_preparation': 'ID',
	'name_analysis_preparation': 'Name',
	'description_analysis_preparation': 'Description',
	'bib_analysis_preparation': 'Bib',
	'file_analysis_preparation': 'File',

	// labels
	'label_id_analysis_preparation': 'ID',
	'label_name_analysis_preparation': 'Name',
	'label_description_analysis_preparation': 'Description',
	'label_bib_analysis_preparation': 'Bib',
	'label_file_analysis_preparation': 'File',

	// FORM VALIDATION ERRORS
	'id_analysis_preparation_min_size_KO': 'ERROR - The id must be at least 1 digit long',
	'id_analysis_preparation_max_size_KO': 'ERROR - The id must be at most 11 digits long',
	'id_analysis_preparation_format_KO': 'ERROR - The id only allows digits (min 1, max 11)',

	'name_analysis_preparation_min_size_KO': 'ERROR - The name must be at least 8 characters long',
	'name_analysis_preparation_max_size_KO': 'ERROR - The name must be at most 100 characters long',
	'name_analysis_preparation_format_KO': 'ERROR - The name only allows letters and spaces, no accents or ñ, min 8, max 100 characters',

	'description_analysis_preparation_min_size_KO': 'ERROR - The description only allows letters and spaces, no accents or ñ, min 80, max 5000 characters',
	'description_analysis_preparation_max_size_KO': 'ERROR - The description only allows letters and spaces, no accents or ñ, min 80, max 5000 characters',
	'description_analysis_preparation_format_KO': 'ERROR - The description only allows letters and spaces, no accents or ñ, min 80, max 5000 characters',

	'bib_analysis_preparation_min_size_KO': 'ERROR - The bib only allows letters and spaces, no accents or ñ, min 80, max 5000 characters',
	'bib_analysis_preparation_max_size_KO': 'ERROR - The bib only allows letters and spaces, no accents or ñ, min 80, max 5000 characters',
	'bib_analysis_preparation_format_KO': 'ERROR - The bib only allows letters and spaces, no accents or ñ, min 80, max 5000 characters',

	'nuevo_file_analysis_preparation_no_file_KO': 'ERROR - You must upload a file',
	'nuevo_file_analysis_preparation_max_size_file_KO': 'ERROR - The file size must be less than 2,000,000 bytes',
	'nuevo_file_analysis_preparation_file_type_KO': 'ERROR - The file must be of type pdf, doc, or docx',
	'nuevo_file_analysis_preparation_format_name_file_KO': 'ERROR - The file name only allows letters with a dot, no accents, ñ, or spaces, min 7, max 100',

	/* PROJECT ----------------------------------------------------------- */
	'text_project': 'Project',
	'text_titulo_page_project': 'Project Management',
	'text_contenido_titulo_form_project_ADD': 'Add Project Form',
	'text_contenido_titulo_form_project_EDIT': 'Edit Project Form',

	// attributes
	'id_project': 'ID',
	'name_project': 'Name',
	'start_date_project': 'Start Date',
	'end_date_project': 'End Date',
	'responsable_project': 'Responsible',
	'organization_project': 'Organization',
	'description_project': 'Description',
	'file_project': 'File',
	'code_project': 'Code',
	'acronym_project': 'Acronym',
	'id_sampling_methodology': 'Sampling Methodology ID',

	// labels
	'label_id_project': 'ID',
	'label_name_project': 'Name',
	'label_start_date_project': 'Project Start Date',
	'label_end_date_project': 'Project End Date',
	'label_responsable_project': 'Project Responsible',
	'label_organization_project': 'Project Organization',
	'label_description_project': 'Description',
	'label_file_project': 'File',
	'label_code_project': 'Code',
	'label_acronym_project': 'Acronym',
	'label_id_sampling_methodology': 'Sampling Methodology ID',

	// form validation errors
	'id_project_min_size_KO': 'ERROR - The id must be at least 1 digit long',
	'id_project_max_size_KO': 'ERROR - The id must be at most 11 digits long',
	'id_project_format_KO': 'ERROR - The id only allows digits (min 1, max 11)',

	'name_project_min_size_KO': 'ERROR - The name must be at least 15 characters long',
	'name_project_max_size_KO': 'ERROR - The name must be at most 100 characters long',
	'name_project_format_KO': 'ERROR - The name only allows letters and spaces, no accents or ñ, min 15, max 100 characters',

	'start_date_project_format_KO': 'ERROR - Date must be in format dd/mm/yyyy',
	'start_date_project_valid_KO': 'ERROR - The entered date is not valid',

	'end_date_project_format_KO': 'ERROR - Date must be in format dd/mm/yyyy',
	'end_date_project_valid_KO': 'ERROR - The entered date is not valid',
	'end_date_project_before_start_date_project_KO': 'ERROR - The end date must be after start date',

	'responsable_project_min_size_KO': 'ERROR - The responsible must be at least 6 characters long',
	'responsable_project_max_size_KO': 'ERROR - The responsible must be at most 60 characters long',
	'responsable_project_format_KO': 'ERROR - The responsible format is not correct',

	'organization_project_min_size_KO': 'ERROR - The organization must be at least 6 characters long',
	'organization_project_max_size_KO': 'ERROR - The organization must be at most 100 characters long',
	'organization_project_format_KO': 'ERROR - The organization only allows letters, accents, ñ and spaces, min 6, max 100 characters',

	'description_project_min_size_KO': 'ERROR - The description must be at least 30 characters long',
	'description_project_max_size_KO': 'ERROR - The description must be at most 500 characters long',
	'description_project_format_KO': 'ERROR - The description only allows ASCII characters, min 30, max 500 characters',

	'nuevo_file_project_format_name_file_KO': 'ERROR - The file name only allows letters, no accents or ñ, no spaces, with a dot, min 7, max 100',
	'nuevo_file_project_no_file_KO': 'ERROR - The file field cannot be empty',
	'nuevo_file_project_max_size_file_KO': 'ERROR - The field must be 100 characters or fewer',
	'nuevo_file_project_file_type_KO': 'ERROR - The file must be pdf, doc, or docx',

	'code_project_min_size_KO': 'ERROR - The code must be at least 6 characters long',
	'code_project_max_size_KO': 'ERROR - The code must be at most 50 characters long',
	'code_project_format_KO': 'ERROR - The code only allows letters, ñ, spaces and punctuation, no accents, min 6, max 50 characters',

	'acronym_project_min_size_KO': 'ERROR - The acronym must be at least 6 characters long',
	'acronym_project_max_size_KO': 'ERROR - The acronym must be at most 15 characters long',
	'acronym_project_format_KO': 'ERROR - The acronym only allows letters, ñ and punctuation, no accents or spaces, min 6, max 15 characters',

	'id_sampling_methodology_min_size_KO': 'ERROR - The id must be at least 1 digit long',
	'id_sampling_methodology_max_size_KO': 'ERROR - The id must be at most 11 digits long',
	'id_sampling_methodology_format_KO': 'ERROR - The id only allows digits (min 1, max 11)',

	/* CHARACTERISTIC ------------------------------------------------- */
	'text_characteristic': 'Characteristic',
	'text_titulo_page_characteristic': 'Characteristic Management',
	'text_contenido_titulo_form_characteristic_ADD': 'Add Characteristic Form',
	'text_contenido_titulo_form_characteristic_EDIT': 'Edit Characteristic Form',

	// attributes
	'id_characteristic': 'ID',
	'name_characteristic': 'Name',
	'description_characteristic': 'Description',
	'data_type_characteristic': 'Data Type',
	'category_characteristic': 'Category',
	'bibref_characteristic': 'Bibliography',
	'file_characteristic': 'File',

	// labels
	'label_id_characteristic': 'ID',
	'label_name_characteristic': 'Name',
	'label_description_characteristic': 'Description',
	'label_data_type_characteristic': 'Data Type',
	'label_category_characteristic': 'Category',
	'label_bibref_characteristic': 'Bibliography',
	'label_file_characteristic': 'File',

	// validation errors
	//id_characteristic
	'id_characteristic_format_KO': 'ERROR - The id only allows digits (min 1, max 11)',
	'id_characteristic_min_size_KO': 'ERROR - The id must be at least 1 digit long',
	'id_characteristic_max_size_KO': 'ERROR - The id must be at most 11 digits long',

	//name_characteristic
	'name_characteristic_format_KO': 'ERROR - The name only allows letters, accents, ñ; length min 8 max 100 characters',
	'name_characteristic_min_size_KO': 'ERROR - The name must be at least 8 characters long',
	'name_characteristic_max_size_KO': 'ERROR - The name must be at most 100 characters long',

	//description_characteristic
	'description_characteristic_format_KO': 'ERROR - The description only allows letters, accents, ñ; length min 80 max 5000 characters',
	'description_characteristic_min_size_KO': 'ERROR - The description must be at least 80 characters long',
	'description_characteristic_max_size_KO': 'ERROR - The description must be at most 5000 characters long',

	//data_type_characteristic
	'data_type_characteristic_invalid_value_KO': 'ERROR - You must select a valid option',

	//category_characteristic
	'category_characteristic_invalid_value_KO': 'ERROR - You must select a valid option',

	//bibref_characteristic
	'bibref_characteristic_format_KO': 'ERROR - The bibref only allows letters, accents, ñ, spaces and punctuation; length min 17 max 200 characters',
	'bibref_characteristic_min_size_KO': 'ERROR - The bibref must be at least 16 characters long',
	'bibref_characteristic_max_size_KO': 'ERROR - The bibref must be at most 200 characters long',

	//file_characteristic
	'file_characteristic_format_name_file_KO': 'ERROR - The file name only allows letters with a dot, no accents, ñ, or spaces',
	'file_characteristic_file_type__KO': 'ERROR - The file must be pdf, doc, or docx',
	'file_characteristic_max_size_file_KO': 'ERROR - The file size must be at most 2,000,000 bytes',
	'file_characteristic_no_file_KO': 'ERROR - The file field cannot be empty',

};

