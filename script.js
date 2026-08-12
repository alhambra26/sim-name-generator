function generarNombre() {
    const nombreAleatorio = nombres[
        Math.floor(Math.random() * nombres.length)
    ];

    alert(nombreAleatorio.nombre);
}
