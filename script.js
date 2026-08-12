function generarNombre() {

    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const cantera = document.getElementById("cantera").value;

    let nombresFiltrados = nombres;
    let apellidosFiltrados = apellidos;

    // Filtrar nombres por género
    if (genero !== "ambos") {
        nombresFiltrados = nombresFiltrados.filter(
            persona => persona.genero === genero
        );
    }

    // Filtrar por cantera
    if (cantera !== "todas") {

        nombresFiltrados = nombresFiltrados.filter(
            persona => persona.cantera === cantera
        );

        apellidosFiltrados = apellidosFiltrados.filter(
            persona => persona.cantera === cantera
        );
    }

    // Generar solo nombre
    if (tipo === "nombre") {

        if (nombresFiltrados.length === 0) {
            document.getElementById("resultado").textContent =
                "No hay nombres disponibles para estos filtros.";
            return;
        }

        const elegido = nombresFiltrados[
            Math.floor(Math.random() * nombresFiltrados.length)
        ];

        document.getElementById("resultado").textContent =
            elegido.nombre;
    }

    // Generar solo apellido
    else if (tipo === "apellido") {

        if (apellidosFiltrados.length === 0) {
            document.getElementById("resultado").textContent =
                "No hay apellidos disponibles para estos filtros.";
            return;
        }

        const elegido = apellidosFiltrados[
            Math.floor(Math.random() * apellidosFiltrados.length)
        ];

        document.getElementById("resultado").textContent =
            elegido.apellido;
    }

    // Generar nombre + apellido
    else if (tipo === "completo") {

        if (
            nombresFiltrados.length === 0 ||
            apellidosFiltrados.length === 0
        ) {
            document.getElementById("resultado").textContent =
                "No hay suficientes datos para estos filtros.";
            return;
        }

        const nombreElegido = nombresFiltrados[
            Math.floor(Math.random() * nombresFiltrados.length)
        ];

        const apellidoElegido = apellidosFiltrados[
            Math.floor(Math.random() * apellidosFiltrados.length)
        ];

        document.getElementById("resultado").textContent =
            nombreElegido.nombre + " " + apellidoElegido.apellido;
    }
}
