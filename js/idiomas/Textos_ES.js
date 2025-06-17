let textos_ES = {

	// textos titulos y generales
	'text_titulo_app': 'Interfaz ET2 IU',
	'text_titulo_menu': 'Opciones de Menú',
	'text_titulo_pie': 'Pie de página',

	'SQL_OK': 'operacion realizada correctamente',
	'SQL_KO': 'fallo en la operacion por un error, algun dato no esta enviado en el formato correcto',
	'RECORDSET_VACIO': 'No hay datos relacionados con la búsqueda',
	'RECORDSET_DATOS': 'Datos relacionados con la búsqueda:',
	'ERROR_UPLOAD_file_characteristic_KO':'El fichero no se ha podido enviar',

	'id_analysis_preparation_es_nulo_KO': 'El id no ha llegado correctamente',
	'name_analysis_preparation_es_nulo_KO': 'El nombre no ha llegado correctamente',
	'description_analysis_preparation_es_nulo_KO': 'La descripción no ha llegado correctamente',
	'bib_analysis_preparation_es_nulo_KO': 'El bib no ha llegado correctamente',
	'nuevo_file_analysis_preparation_es_nulo_KO': 'El archivo no ha llegado correctamente',
	'link_file_analysis_preparation_es_nulo_KO': 'El link del archivo no ha llegado correctamente',

	'id_project_es_nulo_KO': 'El id no ha llegado correctamente',
	'name_project_es_nulo_KO': 'El nombre no ha llegado correctamente',
	'start_date_project_es_nulo_KO': 'La fecha de comienzo de proyecto no ha llegado correctamente',
	'end_date_project_es_nulo_KO': 'La fecha de fin de proyecto no ha llegado correctamente',
	'responsable_project_es_nulo_KO': 'El responsable no ha llegado correctamente',
	'organization_project_es_nulo_KO': 'La organización no ha llegado correctamente',
	'description_project_es_nulo_KO': 'La descripción no ha llegado correctamente',
	'nuevo_file_project_es_nulo_KO': 'El id archivo ha llegado correctamente',
	'file_project_es_nulo_KO': 'El id archivo no ha llegado correctamente',
	'code_project_es_nulo_KO': 'El código no ha llegado correctamente',
	'acronym_project_es_nulo_KO': 'El acrónimo no ha llegado correctamente',
	'id_sampling_methodology_es_nulo_KO': 'El id de la metodología no ha llegado correctamente',
	'link_file_project_es_nulo_KO': 'El link del archivo no ha llegado correctamente',

	'id_characteristic_es_nulo_KO': 'El id no ha llegado correctamente',
	'name_characteristic_es_nulo_KO': 'El nombre no ha llegado correctamente',
	'description_characteristic_es_nulo_KO': 'La descripción no ha llegado correctamente',
	'data_type_characteristic': 'El tipo de característica no ha llegado correctamente',
	'category_characteristic': 'La categoría de la estadística no ha llegado correctamente',
	'bibref_characteristic_es_nulo_KO': 'El bibref no ha llegado correctamente',
	'link_file_characteristic_es_nulo_KO': 'El link del archivo no ha llegado correctamente',
	'nuevo_file_characteristic_es_nulo_KO': 'El id archivo ha llegado correctamente',
	'file_characteristic_es_nulo_KO': 'El id archivo no ha llegado correctamente',

	'true': 'El valor introducido es correcto',

	/*ANALYSIS PREPARATION -------------------------------------------------*/
	'text_analysis_prep': 'Preparación Análisis',
	'text_titulo_page_analysis_preparation': 'Gestión de Preparación Análisis',
	'text_contenido_titulo_form_analysis_preparation_ADD': 'Formulario Alta Preparación Análisis',
	'text_contenido_titulo_form_analysis_preparation_EDIT': 'Formulario Modificación Preparación Análisis',
	'text_contenido_titulo_form_analysis_preparation_SEARCH': 'Formulario Búsqueda del Proyecto',
	'text_contenido_titulo_form_analysis_preparation_DELETE': 'Formulario Eliminación del Proyecto',
	'text_contenido_titulo_form_analysis_preparation_SHOWCURRENT': 'Formulario Visualización del Proyecto',

	// atributos
	'id_analysis_preparation': 'ID ',
	'name_analysis_preparation': 'Nombre',
	'description_analysis_preparation': 'Descripción',
	'bib_analysis_preparation': 'Bib',
	'file_analysis_preparation': 'Archivo',
	'nuevo_file_analysis_preparation': 'Archivo',

	// labels
	'label_id_analysis_preparation': 'ID',
	'label_name_analysis_preparation': 'Nombre',
	'label_description_analysis_preparation': 'Descripción',
	'label_bib_analysis_preparation': 'Bib',
	'label_file_analysis_preparation': 'Archivo',

	// ERRORES VALIDACIONES FORMULARIO
	// id_analysis_preparation
	'id_analysis_preparation_min_size_KO': 'ERROR - El id debe tener al menos 1 dígito',
	'id_analysis_preparation_max_size_KO': 'ERROR - El id debe tener máximo 11 dígitos',
	'id_analysis_preparation_format_KO': 'ERROR - El id solo permite digitos min 1 max 11',

	// name_analysis_preparation
	'name_analysis_preparation_min_size_KO': 'ERROR - El nombre tiene que ser de al menos 8 dígitos',
	'name_analysis_preparation_max_size_KO': 'ERROR - El nombre tiene que ser de máximo 100 dígitos',
	'name_analysis_preparation_format_KO': 'ERROR - El nombre solo admite alfabéticos y espacios sin acentos ni ñ, min 8 máx 100 caracteres',

	// description_analysis_preparation
	'description_analysis_preparation_min_size_KO': 'ERROR - La descripción solo permite alfabéticos y espacios sin acentos ni ñ, min 80 max 5000',
	'description_analysis_preparation_max_size_KO': 'ERROR - La descripción solo permite alfabéticos y espacios sin acentos ni ñ, min 80 max 5000',
	'description_analysis_preparation_format_KO': 'ERROR - La descripción solo permite alfabéticos y espacios sin acentos ni ñ, min 80 max 5000',

	// bib_analysis_preparation
	'bib_analysis_preparation_min_size_KO': 'ERROR - La descripción solo permite alfabéticos y espacios sin acentos ni ñ, min 80 max 5000',
	'bib_analysis_preparation_max_size_KO': 'ERROR - La descripción solo permite alfabéticos y espacios sin acentos ni ñ, min 80 max 5000',
	'bib_analysis_preparation_format_KO': 'ERROR - La descripción solo permite alfabéticos y espacios sin acentos ni ñ, min 80 max 5000',

	// file_analysis_preparation	
	'nuevo_file_analysis_preparation_no_file_KO': 'ERROR - Es necesario que suba un archivo',
	'nuevo_file_analysis_preparation_max_size_file_KO': 'ERROR - El tamaño del fichero debe ser menos a 2000000',
	'nuevo_file_analysis_preparation_file_type_KO': 'ERROR - El fichero debe ser del tipo pdf, doc o docx',
	'nuevo_file_analysis_preparation_format_name_file_KO': 'ERROR - El fichero solo permite alfabéticos con punto sin acentos ni ñ ni espacios min 7 max 100',

	/*PROJECT -----------------------------------------------------------*/
	// textos titulos
	'text_project': 'Proyecto',
	'text_titulo_page_project': 'Gestión del Proyecto',
	'text_contenido_titulo_form_project_ADD': 'Formulario Alta del Proyecto',
	'text_contenido_titulo_form_project_EDIT': 'Formulario Modificación del Proyecto',
	'text_contenido_titulo_form_project_SEARCH': 'Formulario Búsqueda del Proyecto',
	'text_contenido_titulo_form_project_DELETE': 'Formulario Eliminación del Proyecto',
	'text_contenido_titulo_form_project_SHOWCURRENT': 'Formulario Visualización del Proyecto',

	// atributos
	'id_project': 'ID ',
	'name_project': 'Nombre',
	'start_date_project': 'Fecha de Inicio',
	'end_date_project': 'Fecha de Fin',
	'responsable_project': 'Responsable',
	'organization_project': 'Organización',
	'description_project': 'Descripción ',
	'file_project': 'Archivo',
	'code_project': 'Código',
	'acronym_project': 'Acrónicmo',
	'id_sampling_methodology': 'ID Metodología de Muestreo',

	// labels
	'label_id_project': 'ID',
	'label_name_project': 'Nombre',
	'label_start_date_project': 'Fecha de Inicio del Proyecto',
	'label_end_date_project': 'Fecha de Fin del Proyecto',
	'label_responsable_project': 'Responsable del Proyecto',
	'label_organization_project': 'Organización del Proyecto',
	'label_description_project': 'Descripción',
	'label_file_project': 'Archivo',
	'label_code_project': 'Código',
	'label_acronym_project': 'Acrónimo',
	'label_id_sampling_methodology': 'ID Metodología de Muestreo',


	// ERRORES VALIDACIONES FORMULARIO 
	// id_project
	'id_project_min_size_KO': 'ERROR - El id debe tener al menos 1 dígito',
	'id_project_max_size_KO': 'ERROR - El id debe tener máximo 11 dígitos',
	'id_project_format_KO': 'ERROR - El id  solo permite digitos min 1 max 11',

	// name_project
	'name_project_min_size_KO': 'ERROR - El nombre debe tener un tamaño igual o mayor a 15 digitos',
	'name_project_max_size_KO': 'ERROR - El nombre debe ser de máximo 100 dígitos',
	'name_project_format_KO': 'ERROR - El nombre solo admite alfabéticos y espacios sin acentos ni ñ, min 15 max 100',

	// start_date_project
	'start_date_project_format_KO': 'ERROR - La fecha introducida debe tener formato dd/mm/aaaa',
	'start_date_project_valid_KO': 'ERROR - La fecha introducida no es válida',

	// end_date_project
	'end_date_project_format_KO': 'ERROR - La fecha introducida debe tener formato dd/mm/aaaa',
	'end_date_project_valid_KO': 'ERROR - La fecha introducida no es válida',
	'end_date_project_before_start_date_project_KO': 'ERROR - La fecha de fin de proyecto debe ser posterior a la fecha de inicio',

	// responsable_project	
	'responsable_project_min_size_KO': 'ERROR - El tamaño del responsable debe ser de mínimo 6 caracteres',
	'responsable_project_max_size_KO': 'ERROR - El tamaño del responsable debe ser de máximo 60 caracteres',
	'responsable_project_format_KO': 'ERROR - El formato del responsable no es correcto',

	// organization_project
	'organization_project_min_size_KO': 'ERROR - La organización del proyecto debe tener un tamaño de al menos 6 caracteres',
	'organization_project_max_size_KO': 'ERROR - La organización del proyecto debe tener un tamaño de máximo 100 caracteres',
	'organization_project_format_KO': 'ERROR - La organización del proyecto solo permite alfabéticos con acentos, ñ y espacios min 6 max 100',

	// description_project
	'description_project_min_size_KO': 'ERROR - La descripción del proyecto debe ser de al menos 30 caracteres',
	'description_project_max_size_KO': 'ERROR - La descripción del proyecto debe ser de máximo 500 caracteres',
	'description_project_format_KO': 'ERROR - La descripción del proyecto solo permite ascii min 30 max 500',

	// file_project
	'nuevo_file_project_format_name_file_KO': 'ERROR - El fichero solo admite alfabéticos sin acentos ni ñ ni espacios con punto min 7 max 100',
	'nuevo_file_project_no_file_KO': 'ERROR - El campo fichero no puede quedar vacio',
	'nuevo_file_project_max_size_file_KO': 'ERROR - Este campo debe ser menor o igual a 100 caracteres',
	'nuevo_file_project_file_type_KO': 'ERROR - El fichero debe ser de tipo pdf, doc o docx',

	// code_project
	'code_project_min_size_KO': 'ERROR - El código debe ser igual o mayor a 6 dígitos',
	'code_project_max_size_KO': 'ERROR - El código debe ser igual o menor a 50 dígitos',
	'code_project_format_KO': 'ERROR - El código solo permite alfabéticos con ñ, espacios y signos de puntuación, sin acentos, min 6 max 50',

	// acronym_project	
	'acronym_project_min_size_KO': 'ERROR - El acrónimo debe ser igual o mayor a 6 dígitos',
	'acronym_project_max_size_KO': 'ERROR - El acrónimo debe ser igual o menor a 15 dígitos',
	'acronym_project_format_KO': 'ERROR - El acrónimo solo permite alfabéticos con ñ y signos de puntuación, sin acentos ni espacios, min 6 max 15',

	// id_sampling_methodology
	'id_sampling_methodology_min_size_KO': 'ERROR - El id debe tener al menos 1 dígito',
	'id_sampling_methodology_max_size_KO': 'ERROR - El id debe tener máximo 11 dígitos',
	'id_sampling_methodology_format_KO': 'ERROR - El id  solo permite digitos min 1 max 11',


	/*CHARACTERISTIC -------------------------------------------------*/
	// textos titulos
	'text_characteristic': 'Característica',
	'text_titulo_page_characteristic': 'Gestión de Característica',
	'text_contenido_titulo_form_characteristic_ADD': 'Formulario Alta de Característica',
	'text_contenido_titulo_form_characteristic_EDIT': 'Formulario Modificación de Característica',
	'text_contenido_titulo_form_characteristic_SEARCH': 'Formulario Búsqueda del Proyecto',
	'text_contenido_titulo_form_characteristic_DELETE': 'Formulario Eliminación del Proyecto',
	'text_contenido_titulo_form_characteristic_SHOWCURRENT': 'Formulario Visualización del Proyecto',

	// atributos
	'id_characteristic': 'ID ',
	'name_characteristic': 'Nombre',
	'description_characteristic': 'Descripción ',
	'data_type_characteristic': 'Tipo de dato ',
	'category_characteristic': 'Categoría ',
	'bibref_characteristic': 'Bibliografía ',
	'file_characteristic': 'Fichero ',

	// labels
	'label_id_characteristic': 'ID ',
	'label_name_characteristic': 'Nombre',
	'label_description_characteristic': 'Descripción ',
	'label_data_type_characteristic': 'Tipo de dato ',
	'label_category_characteristic': 'Categoría ',
	'label_bibref_characteristic': 'Bibliografía ',
	'label_file_characteristic': 'Fichero ',

	// ERRORES VALIDACIONES FORMULARIO 
	//id_characteristic
	'id_characteristic_format_KO': 'El id  solo permite digitos min 1 max 11',
	'id_characteristic_min_size_KO': 'ERROR - El id debe tener al menos 1 dígito',
	'id_characteristic_max_size_KO': 'ERROR - El id debe tener máximo 11 dígitos',

	//name_characteristic
	'name_characteristic_format_KO': 'name_characteristic_format_KO	ERROR - El nombre solo permite no alfabéticos con acentos y ñ, menos de 8 más de 100',
	'name_characteristic_min_size_KO': 'ERROR - El nombre debe ser igual o mayor a 8 dígitos',
	'name_characteristic_max_size_KO': 'ERROR - El nombre debe ser igual o menor a 100 dígitos',

	//description_characteristic
	'description_characteristic_format_KO': 'ERROR - La descripción solo permite no alfabéticos con acentos y ñ menos de 80 y más de 5000',
	'description_characteristic_min_size_KO': 'ERROR - La descripción debe ser igual o mayor a 80 caracteres',
	'description_characteristic_max_size_KO': 'ERROR - La descripción debe ser igual o menor a 5000 caracteres',

	//data_type_characteristic
	'data_type_characteristic_invalid_value_KO': 'ERROR - Debes seleccionar una opción válida',

	//category_characteristic
	'category_characteristic_invalid_value_KO': 'ERROR - Debes seleccionar una opción válida',

	//bibref_characteristic
	'bibref_characteristic_format_KO': 'ERROR - El bibref solo permite alfabéticos con acentos, ñ y espacios y signos de puntuación min 17 max 200',
	'bibref_characteristic_min_size_KO': 'ERROR - El bibref debe ser igual o mayor a 16 caracteres',
	'bibref_characteristic_max_size_KO': 'ERROR - El bibref debe ser igual o menor a 200 caracteres',

	//file_characteristic
	'file_characteristic_format_name_file_KO': 'ERROR - El fichero solo permite alfabéticos con punto sin acentos ni ñ ni espacios min 7 max 100',
	'file_characteristic_file_type_KO': 'ERROR - El fichero solo permite ficheros de tipo pdf, doc o docx',
	'file_characteristic_max_size_file_KO': 'ERROR - El tamaño del fichero debe ser igual o menor a 2000000',
	'file_characteristic_no_file_KO': 'ERROR - El campo fichero no puede quedar vacio',

}