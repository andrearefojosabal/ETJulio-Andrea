// estructura general de datos
// cuando un elemento no existe es que no se aplica
// implica que tienes que comprobar si un elemento existe antes de preguntar su valor

const estructura_generica = {
    attributes_list: [], //array atributos (obligatorio)
    columnas_visibles_tabla : [], //array columnas visibles (obligatorio)
    columnas_modificadas_tabla: [], //array de atributos a cambiar formato en la tabla de datos (No obligatorio, solo si se cambia formato informacion en tabla)
    attributes: { // conjunto de descripciones de atributos de la entidad (obligatorio)
        nombredeatributo :{ // clave con el nombre del atributo
            html: { //indicación de elemento en html para mostrar este campo
                tag: 'tag html', //tag html (select, input, textarea, .....)
                options : ['valor1', 'valor2'], // atributo de un tag select. array con las options (obligatorio con tag select)
                type : "", // atributo de tag input (file, text, data, number,.... ) obligatorio con tag input
                rows: 0,// atributo de tag textarea corresponde con las filas. Obligatorio con un textarea
                columns: 0,// atributo de tag textarea corresponde con las columnas. Obligatorio con un textarea
                multiple: true, // atributo de valores multiples (input file, select, chechbox, ...). Obligatorio si puede coger multiples valores el atributo
                component_visible_size: 7, // atributo de longitud fisica del campo del formulario. Obligatorio si se quiere que tenga su tamaño adecuado
            },
            is_pk: true, // indica si es clave primaria. No obligatorio, solo si es clave primaria
            is_autoincrement: true, // indica si es autoincremental. No obligatorio, solo si es autoincremetal
            is_null: true, // indica si el atributo permite nulos/vacios. No obligatorio, solo si permite nulos/vacios
            default_value: 'valorpordefecto', // indica si hay un valor por defecto que colocar en el campo si esta vacio. No obligatorio, solo si se desea un valor por defecto (obviamente seria en el ADD)
            validation_rules:{ // reglas de validacion
                nombreaccion:{ // indicación de la accion. No obligatorio si para el campo no hay validacion.(ADD,EDIT, SEARCH)
                    min_size: [8, "nombredeatributo_min_size_KO"], // funcion atomica tamaño minimo, tiene el parametro de tamaño minimo del atributo (el que sea) y el codigo de error a devolver. No obligatorio sino se comprueba el tamaño minimo
                    max_size: [68, "nombredeatributo_max_size_KO"], // funcion atomica tamaño maximo, tiene el parametro de tamaño maximo del atributo (el que sea) y el codigo de error a devolver. No obligatorio sino se comprueba el tamaño maximo
                    format: ["expresionregular", "nombredeatributo_format_KO"], // funcion atomica formato de valor, tiene el parametro de expresión regular del valor del atributo (el que sea) y el codigo de error a devolver. No obligatorio sino se comprueba el formato
                    no_file: "nuevo_nombredeatributo_no_file_KO", // funcion atomica no existe fichero. no obligatorio segun accion
                    file_type :["application/pdf","nuevo_nombredeatributo_file_type_KO"], // funcion atomica tipo mime fichero. No obligatorio si no se comprueba tipo de fichero
                    max_size_file: [2000, "nuevo_nombredeatributo_max_size_file_KO"], // funcion atomica tamaño maximo fichero. No obligatorio si no se comprueba tamaño maximo fichero
                    format_name_file: ["expresionregular","nuevo_nombredeatributo_format_name_file_KO"], // funcion atomica formato nombre fichero. No obligatorio sino se comprueba el formato del nombre y extension
                    personalized: "personalized_validation_nombreatributo($extravalues)", // funcion personalizada. corresponde con un metodo en la clase entidad correspondiente, para ejecutarla deben existir las variables parametro de la funcion (id, valor, extravalues). No obligatorio sino hay funciones de validacioin personalizadas
                }    
            }
        }, // fin de este atributo y se rellena para los siguientes
    }
};

const estructura_persona = {
    attributes_list: ['dni', 'nombre_persona', 'apellidos_persona', 'rol', 'fechaNacimiento_persona', 'direccion_persona', 'telefono_persona', 'email_persona', 'foto_persona'],
    columnas_visibles_tabla : ['dni', 'nombre_persona', 'telefono_persona'],
    columnas_modificadas_tabla: ['foto_persona'],
    attributes: {
        dni: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_pk: true,
            is_not_null: true,
            component_visible_size: 9,
            validation_rules: {
                ADD:{
                    min_size : [9, 'dni_min_size_KO'],
				    max_size: [9,'dni_max_size_KO'],
                    reg_exp : ['^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$', 'dni_format_KO'],
                },
                EDIT:{
                    min_size : [9, 'dni_min_size_KO'],
				    max_size: [9,'dni_max_size_KO'],
                    reg_exp : ['^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$', 'dni_format_KO'],
                },
                SEARCH:{
				    max_size: [9,'dni_max_size_KO'],
                    reg_exp : ['^[0-9]+[TRWAGMYFPDXBNJZSQVHLCKE]$', 'dni_format_KO'],
                }
            }
        },
        nombre_persona: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size : [9, 'nombre_persona_min_size_KO'],
				    max_size: [9,'nombre_persona_max_size_KO'],
                    reg_exp : ['^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$', 'nombre_persona_format_KO'],
                },
                EDIT:{
                    min_size : [9, 'nombre_persona_min_size_KO'],
				    max_size: [9,'nombre_persona_max_size_KO'],
                    reg_exp : ['^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$', 'nombre_persona_format_KO'],
                },
                SEARCH:{
				    max_size: [9,'nombre_persona_max_size_KO'],
                    reg_exp : ['^[0-9]+[TRWAGMYFPDXBNJZSQVHLCKE]$', 'nombre_persona_format_KO'],
                }
            }
        },
        apellidos_persona: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
            }
        },
        fechaNacimiento_persona: {
            html: {
                tag: 'input',
                type: 'date',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    min_size: [10, 'fechaNacimiento_persona_min_size_KO'],
                    personalize: "personalized_validation_fechaNacimiento_persona(arrayatributosvalores)",
                },
            }
        },
        direccion_persona: {
            html: {
                tag: 'textarea',
                cols: 100,
                rows: 10
            },
            is_not_null: true,
            validation_rules: {
            }
        },
        telefono_persona: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
            }
        },
        email_persona: {
            html: {
                tag: 'input',
                type: 'text',
            },
            is_not_null: true,
            validation_rules: {
            }
        },
        foto_persona: {
            html: {
                tag: 'input',
                type: 'file',
            },
            is_not_null: true,
            validation_rules: {
                ADD:{
                    no_file: "nuevo_foto_persona_no_file_KO", 
                    file_type :["application/pdf", "nuevo_foto_persona_file_type_KO"],
                    max_size_file: [2000, "nuevo_foto_persona_max_size_file_KO"],
                },
            }
        },
    },

};

/*

CREATE TABLE `persona` (
  `dni` varchar(9) COLLATE utf8_bin NOT NULL,
  `nombre_persona` varchar(45) COLLATE utf8_bin NOT NULL,
  `apellidos_persona` varchar(100) COLLATE utf8_bin NOT NULL,
  `fechaNacimiento_persona` date NOT NULL,
  `direccion_persona` varchar(200) COLLATE utf8_bin NOT NULL,
  `telefono_persona` varchar(9) COLLATE utf8_bin NOT NULL,
  `email_persona` varchar(45) COLLATE utf8_bin NOT NULL,
  `foto_persona` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;

Primary Key de la entidad persona: dni
Uniques en la entidad persona: email_persona

dni: formato dni válido de 8 números y una letra
nombre_persona: alfabético con acentos, guión y espacios de max 45 min 3
apellidos_persona: alfabético con acentos, guión y espacios de max 100 min 5
fechaNacimiento_persona: fecha válida de 2 números para día, dos números para mes y cuatro números para año, / como caracter de separación
dirección_persona: alfabético con acentos, números, espacios, ‘/’,’-’,’,’,’º’,‘ª’, max 200 min 10
telefono_persona: número de teléfono válido formato de España max 9
email_persona: email válido max 45 min 8
foto_persona; alfabético sin acentos con extensión jpg o png max 40 (esto es debido a que se necesitan caracteres para almacenar su ruta en bd) min 6


*/