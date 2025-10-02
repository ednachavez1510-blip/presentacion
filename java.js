// Capturamos el formulario
const formulario = document.getElementById("formulario");

// Evento cuando se envía el formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Tomamos los valores
    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;
    const archivo = document.getElementById("archivo").files[0];

    // Mensaje de confirmación
    let mensaje = `Gracias, ${nombre || "Usuario"}.\n\nTu comentario fue: "${comentario || "Sin comentario"}"`;
    if (archivo) {
        mensaje += `\nArchivo seleccionado: ${archivo.name}`;
    } else {
        mensaje += `\nNo subiste ningún archivo.`;
    }

    alert(mensaje);
});