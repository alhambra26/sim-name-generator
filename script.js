function generarNombre() {

    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;

    let nombresFiltrados = nombres;

    if (genero !== "ambos") {
        nombresFiltrados = nombres.filter(
            persona => persona.genero === genero
        );
    }

    if (tipo === "nombre") {

        const elegido = nombresFiltrados[
            Math.floor(Math.random() * nombresFiltrados.length)
        ];

        document.getElementById("resultado").textContent = elegido.nombre;

    } else if (tipo === "apellido") {

        const elegido = apellidos[
            Math.floor(Math.random() * apellidos.length)
        ];

        document.getElementById("resultado").textContent = elegido.apellido;

    } else if (tipo === "completo") {

        const nombreElegido = nombresFiltrados[
            Math.floor(Math.random() * nombresFiltrados.length)
        ];

        const apellidoElegido = apellidos[
            Math.floor(Math.random() * apellidos.length)
        ];

        document.getElementById("resultado").textContent =
            nombreElegido.nombre + " " + apellidoElegido.apellido;
    }
}
