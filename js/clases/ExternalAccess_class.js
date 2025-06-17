class ExternalAccess {
    back_request(formulario = '', entidad = '', accion = '') {
        let datos = new FormData();

        if (formulario !== '') {
            const formElement = document.getElementById(formulario);
            if (!formElement) {
                alert('Formulario no encontrado: ' + formulario);
                return Promise.resolve({ ok: false, code: 'FORM_NOT_FOUND' });
            }

            datos = new FormData(formElement);

            // Añadir manualmente los campos deshabilitados
            const elementos = formElement.elements;
            for (let i = 0; i < elementos.length; i++) {
                const campo = elementos[i];
                if (campo.disabled && campo.name && !datos.has(campo.name)) {
                    datos.append(campo.name, campo.value);
                }
            }
        }

        datos.append('controlador', entidad);
        datos.append('action', accion);

        return new Promise(function (resolve) {
            $.ajax({
                method: "POST",
                url: "http://193.147.87.202/ET2/index.php",
                data: datos,
                processData: false,
                contentType: false,
                success: function (res) {
                    resolve(res);
                },
                error: function (res) {
                    alert('Error de conexión con BACK. Código: ' + res.status);
                    resolve({ ok: false, code: res.status });
                }
            });
        });
    }
}