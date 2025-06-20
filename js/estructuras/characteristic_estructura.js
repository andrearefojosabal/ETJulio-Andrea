const estructura_characteristic = {
    attributes_list: ['id_characteristic', 'name_characteristic', 'description_characteristic', 'data_type_characteristic', 'category_characteristic', 'bibref_characteristic', 'file_characteristic'],
    columnas_visibles_tabla: ['id_characteristic', 'name_characteristic', 'description_characteristic', 'data_type_characteristic', 'category_characteristic', 'bibref_characteristic', 'file_characteristic'],
    columnas_modificadas_tabla: [],
    attributes: {
        id_characteristic: {
            html: {
                tag: 'input',
                type: 'number',
                component_visible_size: 11
            },
            is_pk: true,
            validation_rules: {
                SEARCH: {
                    max_size: [11, 'id_characteristic_max_size_KO'],
                    format: ['^[0-9]+$', 'id_characteristic_format_KO']
                }
            }
        },
        name_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD: {
                    min_size: [8, 'name_characteristic_min_size_KO'],
                    max_size: [100, 'name_characteristic_max_size_KO'],
                    format: ['^[A-Za-z ]+$', 'name_characteristic_format_KO']
                },
                EDIT: {
                    min_size: [8, 'name_characteristic_min_size_KO'],
                    max_size: [100, 'name_characteristic_max_size_KO'],
                    format: ['^[A-Za-z ]+$', 'name_characteristic_format_KO']
                },
                SEARCH: {
                    max_size: [100, 'name_characteristic_max_size_KO'],
                    format: ['^[A-Za-z ]+$', 'name_characteristic_format_KO']
                }
            }
        },
        description_characteristic: {
            html: {
                tag: 'textarea',
                type: 'text',
                rows: 10,
                columns: 50,
            },
            validation_rules: {
                ADD: {
                    min_size: [80, 'description_characteristic_min_size_KO'],
                    max_size: [5000, 'description_characteristic_max_size_KO'],
                    format: ['^[A-Za-z ]{80,5000}$', 'description_characteristic_format_KO'],
                },
                EDIT: {
                    min_size: [80, 'description_characteristic_min_size_KO'],
                    max_size: [5000, 'description_characteristic_max_size_KO'],
                    format: ['^[A-Za-z ]{80,5000}$', 'description_characteristic_format_KO'],
                },
                SEARCH: {
                    max_size: [5000, 'description_characteristic_max_size_KO'],
                    format: ['^[A-Za-z ]{0,5000}$', 'description_characteristic_format_KO'],
                }
            }
        },
        data_type_characteristic: {
            html: {
                tag: 'select',
                options: ['number', 'text', 'set']
            },
            validation_rules: {
                ADD: {
                    format: ['^(number|text|set)$', 'data_type_characteristic_invalid_value_KO']
                },
                EDIT: {
                    format: ['^(number|text|set)$', 'data_type_characteristic_invalid_value_KO']
                },
                SEARCH: {
                    format: ['^(number|text|set)?$', 'data_type_characteristic_invalid_value_KO']
                }
            }
        },
        category_characteristic: {
            html: {
                tag: 'select',
                options: ['soil_site', 'soil_chem', 'soil_bio']
            },
            validation_rules: {
                ADD: {
                    format: ['^(soil_site|soil_chem|soil_bio)$', 'category_characteristic_invalid_value_KO']
                },
                EDIT: {
                    format: ['^(soil_site|soil_chem|soil_bio)$', 'category_characteristic_invalid_value_KO']
                },
                SEARCH: {
                    format: ['^(soil_site|soil_chem|soil_bio)?$', 'category_characteristic_invalid_value_KO']
                }
            }
        },

        bibref_characteristic: {
            html: {
                tag: 'textarea',
                type: 'text',
                rows: 10,
                columns: 50
            },
            validation_rules: {
                ADD: {
                    min_size: [16, 'bibref_characteristic_min_size_KO'],
                    max_size: [200, 'bibref_characteristic_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ .,;:!?¿¡\'"()\\-]+$', 'bibref_characteristic_format_KO']
                },
                EDIT: {
                    min_size: [16, 'bibref_characteristic_min_size_KO'],
                    max_size: [200, 'bibref_characteristic_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ .,;:!?¿¡\'"()\\-]+$', 'bibref_characteristic_format_KO']
                },
                SEARCH: {
                    max_size: [200, 'bibref_characteristic_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ .,;:!?¿¡\'"()\\-]+$', 'bibref_characteristic_format_KO']
                }
            }
        },
        nuevo_file_characteristic: {
            html: {
                tag: 'input',
                type: 'file',
                component_visible_size: 11
            },
            validation_rules: {
                ADD: {
                    no_file : [false, "nuevo_file_characteristic_no_file_KO"], // funcion atomica no obligatorio si no se comprueba que se sube un fichero
                    file_type: [Array('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'), "nuevo_file_characteristic_file_type_KO"],
                    max_size_file: [200000, "nuevo_file_characteristic_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ['^[A-Za-z.]{7,100}$', "nuevo_file_characteristic_format_name_file_KO"] // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                },
                EDIT: {
                    no_file : [false, "nuevo_file_characteristic_no_file_KO"],
                    file_type: [Array('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'), "nuevo_file_characteristic_file_type_KO"],
                    max_size_file: [200000, "nuevo_file_characteristic_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ['^[A-Za-z.]{7,100}$', "nuevo_file_characteristic_format_name_file_KO"] // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                },
                SEARCH: {
                    format_name_file: ['^[A-Za-z.]{0,100}$', "nuevo_file_characteristic_format_name_file_KO"] // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                }
            }
        },
    },

};
