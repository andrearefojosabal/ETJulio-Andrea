const estructura_analysis_preparation = {
    attributes_list: ['id_analysis_preparation', 'name_analysis_preparation', 'description_analysis_preparation', 'bib_analysis_preparation', 'nuevo_file_analysis_preparation'],
    columnas_visibles_tabla : ['id_analysis_preparation', 'name_analysis_preparation', 'description_analysis_preparation', 'bib_analysis_preparation', 'nuevo_file_analysis_preparation'],
    columnas_modificadas_tabla: [],
    attributes: {
        id_analysis_preparation: {
            html: {
                tag: 'input',
                type: "number",
                component_visible_size: 11,
            },
            is_pk: true,
            is_autoincrement: true,
            validation_rules: {
                SEARCH:{
				    max_size: [11,'id_analysis_preparation_max_size_KO'],
                    format : ['^[0-9]+$', 'id_analysis_preparation_format_KO'],
                }
            }
        },
        name_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD:{
                    min_size : [8, 'name_analysis_preparation_min_size_KO'],
				    max_size: [100,'name_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-z ]+$', 'name_analysis_preparation_format_KO'],
                },
                EDIT:{
                    min_size : [8, 'name_analysis_preparation_min_size_KO'],
				    max_size: [100,'name_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-z ]+$', 'name_analysis_preparation_format_KO'],
                },
                SEARCH:{
				    max_size: [100,'name_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-z ]+$', 'name_analysis_preparation_format_KO'],
                }
            }
        },
        description_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD:{
                    min_size : [80, 'description_analysis_preparation_min_size_KO'],
				    max_size: [5000,'description_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-z ]+$', 'description_analysis_preparation_format_KO'],
                },
                EDIT:{
                    min_size : [80, 'description_analysis_preparation_min_size_KO'],
				    max_size: [5000,'description_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-z ]+$', 'description_analysis_preparation_format_KO'],
                },
                SEARCH:{
				    max_size: [5000,'description_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-z ]+$', 'description_analysis_preparation_format_KO'],
                }
            }
        },
        bib_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD:{
                    min_size : [6, 'bib_analysis_preparation_min_size_KO'],
				    max_size: [200,'bib_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ .,;:!?¿¡\'"()\\-]+$', 'bib_analysis_preparation_format_KO'],
                },
                EDIT:{
                    min_size : [6, 'bib_analysis_preparation_min_size_KO'],
				    max_size: [200,'bib_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ .,;:!?¿¡\'"()\\-]+$', 'bib_analysis_preparation_format_KO'],
                },
                SEARCH:{
				    max_size: [200,'bib_analysis_preparation_max_size_KO'],
                    format : ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ .,;:!?¿¡\'"()\\-]+$', 'bib_analysis_preparation_format_KO'],
                }
            }
        },
        nuevo_file_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'file',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD:{
                    no_file: [false, "nuevo_file_analysis_preparation_no_file_KO"], // funcion atomica no fichero. No obligatorio sino se comprueba que no se sube un fichero
                    file_type:[Array('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'),"nuevo_file_analysis_preparation_file_type_KO"],
                    max_size_file: [200000, "nuevo_file_analysis_preparation_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ['^[A-Za-z.]{7,100}$',"nuevo_file_analysis_preparation_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                },
                EDIT:{
                    no_file: [false, "nuevo_file_analysis_preparation_no_file_KO"],
                    file_type :[Array('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'),"nuevo_file_analysis_preparation_file_type_KO"],
                    max_size_file: [200000, "nuevo_file_analysis_preparation_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ['^[A-Za-z.]{7,100}$',"nuevo_file_analysis_preparation_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                },
                SEARCH:{
				    format_name_file: ['^[A-Za-z.]{0,100}$',"nuevo_file_analysis_preparation_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                }
            }
        },
    },

};