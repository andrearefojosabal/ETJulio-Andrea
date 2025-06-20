const estructura_project = {
    attributes_list: ['id_project', 'name_project', 'start_date_project', 'end_date_project', 'responsable_project', 'organization_project', 'description_project', 'file_project', 'code_project', 'acronym_project', 'id_sampling_methodology'],
    columnas_visibles_tabla: ['id_project', 'name_project', 'start_date_project', 'end_date_project', 'responsable_project', 'organization_project', 'description_project', 'file_project', 'code_project', 'acronym_project', 'id_sampling_methodology'],
    columnas_modificadas_tabla: ['start_date_project', 'end_date_project'],
    attributes: {
        id_project: {
            html: {
                tag: 'input',
                type: 'number',
                component_visible_size: 11,
            },
            is_pk: true,
            validation_rules: {
                SEARCH: {
                    max_size: [11, 'id_project_max_size_KO'],
                    format: ['^[0-9]+$', 'id_project_format_KO'],
                }
            }
        },
        name_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD: {
                    min_size: [15, 'name_project_min_size_KO'],
                    max_size: [100, 'name_project_max_size_KO'],
                    format: ['^[A-Za-z ]+$', 'name_project_format_KO'],
                },
                EDIT: {
                    min_size: [15, 'name_project_min_size_KO'],
                    max_size: [100, 'name_project_max_size_KO'],
                    format: ['^[A-Za-z ]+$', 'name_project_format_KO'],
                },
                SEARCH: {
                    max_size: [100, 'name_project_max_size_KO'],
                    format: ['^[A-Za-z ]+$', 'name_project_format_KO'],
                }
            }
        },
        start_date_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 12,
            },
            validation_rules: {
                ADD: {
                    format: ["^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$", "start_date_project_format_KO"],
                    personalized: "check_special_start_date_project($end_date_project)",
                },
                EDIT: {
                    format: ["^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$", "start_date_project_format_KO"],
                    personalized: "check_special_start_date_project($end_date_project)",
                },
                SEARCH: {
                    format: ["^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$", "start_date_project_format_KO"],
                },
            }
        },
        end_date_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 12,
            },
            validation_rules: {
                ADD: {
                    format: ["^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$", "end_date_project_format_KO"],
                    personalized: "check_special_end_date_project($start_date_project)",
                },
                EDIT: {
                    format: ["^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$", "end_date_project_format_KO"],
                    personalized: "check_special_end_date_project($start_date_project)",
                },
                SEARCH: {
                    format: ["^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$", "end_date_project_format_KO"],
                },
            }
        },
        responsable_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 60,
            },
            validation_rules: {
                ADD: {
                    min_size: [6, 'responsable_project_min_size_KO'],
                    max_size: [60, 'responsable_project_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$', 'responsable_project_format_KO'],
                },
                EDIT: {
                    min_size: [6, 'responsable_project_min_size_KO'],
                    max_size: [60, 'responsable_project_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$', 'responsable_project_format_KO'],
                },
                SEARCH: {
                    max_size: [60, 'responsable_project_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$', 'responsable_project_format_KO'],
                }
            }
        },
        organization_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD: {
                    min_size: [6, 'organization_project_min_size_KO'],
                    max_size: [100, 'organization_project_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$', 'organization_project_format_KO'],
                },
                EDIT: {
                    min_size: [6, 'organization_project_min_size_KO'],
                    max_size: [100, 'organization_project_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$', 'organization_project_format_KO'],
                },
                SEARCH: {
                    max_size: [100, 'organization_project_max_size_KO'],
                    format: ['^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$', 'organization_project_format_KO'],
                }
            }
        },
        description_project: {
            html: {
                tag: 'textarea',
                type: 'text',
                rows: 10,
                columns: 50,
            },
            validation_rules: {
                ADD: {
                    min_size: [30, 'description_project_min_size_KO'],
                    max_size: [500, 'description_project_max_size_KO'],
                    format: ['^[\x20-\x7E]+$', 'description_project_format_KO'],
                },
                EDIT: {
                    min_size: [30, 'description_project_min_size_KO'],
                    max_size: [500, 'description_project_max_size_KO'],
                    format: ['^[\x20-\x7E]+$', 'description_project_format_KO'],
                },
                SEARCH: {
                    max_size: [500, 'description_project_max_size_KO'],
                    format: ['^[\x20-\x7E]+$', 'description_project_format_KO'],
                }
            }
        },
        nuevo_file_project: {
            html: {
                tag: 'input',
                type: 'file',
                component_visible_size: 100,
            },
            validation_rules: {
                ADD: {
                    no_file: [false, "nuevo_file_project_no_file_KO"], // funcion atomica no obligatorio si no se comprueba que se suba un fichero
                    file_type: [Array('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'), "nuevo_file_project_file_type_KO"],
                    max_size_file: [2000000, "nuevo_file_project_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ['^[A-Za-z.]{7,100}$', "nuevo_file_project_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                },
                EDIT: {
                    no_file: [false, "nuevo_file_project_no_file_KO"], 
                    file_type: [Array('application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'), "nuevo_file_project_file_type_KO"],
                    max_size_file: [2000000, "nuevo_file_project_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ['^[A-Za-z.]{7,100}$', "nuevo_file_project_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                },
                SEARCH: {
                    format_name_file: ['^[A-Za-z.]{0,100}$', "nuevo_file_project_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                }
            }
        },
        code_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50,
            },
            validation_rules: {
                ADD: {
                    min_size: [6, 'code_project_min_size_KO'],
                    max_size: [50, 'code_project_max_size_KO'],
                    format: ['^[A-Za-zñÑ .,;:!?¿¡\'"()]+$', 'code_project_format_KO'],
                },
                EDIT: {
                    min_size: [6, 'code_project_min_size_KO'],
                    max_size: [50, 'code_project_max_size_KO'],
                    format: ['^[A-Za-zñÑ .,;:!?¿¡\'"()]+$', 'code_project_format_KO'],
                },
                SEARCH: {
                    max_size: [50, 'code_project_max_size_KO'],
                    format: ['^[A-Za-zñÑ .,;:!?¿¡\'"()]+$', 'code_project_format_KO'],
                }
            }
        },
        acronym_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 15,
            },
            validation_rules: {
                ADD: {
                    min_size: [6, 'acronym_project_min_size_KO'],
                    max_size: [15, 'acronym_project_max_size_KO'],
                    format: ['^[A-Za-zñÑ.,;:!?]+$', 'acronym_project_format_KO'],
                },
                EDIT: {
                    min_size: [6, 'acronym_project_min_size_KO'],
                    max_size: [15, 'acronym_project_max_size_KO'],
                    format: ['^[A-Za-zñÑ.,;:!?]+$', 'acronym_project_format_KO'],
                },
                SEARCH: {
                    max_size: [15, 'acronym_project_max_size_KO'],
                    format: ['^[A-Za-zñÑ.,;:!?]+$', 'acronym_project_format_KO'],
                }
            }
        },
        id_sampling_methodology: {
            html: {
                tag: 'input',
                type: 'number',
                component_visible_size: 11,
            },
            validation_rules: {
                ADD: {
                    min_size: [1, 'id_sampling_methodology_min_size_KO'],
                    max_size: [11, 'id_sampling_methodology_max_size_KO'],
                    format: ['^[0-9]+$', 'id_sampling_methodology_format_KO'],
                },
                EDIT: {
                    min_size: [1, 'id_sampling_methodology_min_size_KO'],
                    max_size: [11, 'id_sampling_methodology_max_size_KO'],
                    format: ['^[0-9]+$', 'id_sampling_methodology_format_KO'],
                },
                SEARCH: {
                    max_size: [11, 'id_sampling_methodology_max_size_KO'],
                    format: ['^[0-9]+$', 'id_sampling_methodology_format_KO'],
                }
            }
        },
    },

};