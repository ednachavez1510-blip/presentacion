// Mostrar un saludo al hacer clic en el botón
document.getElementById("saludoBtn").addEventListener("click", function() {
    alert("¡Hola! Gracias por visitar mi página 😃");
});

// Cambiar el color del menú al hacer scroll
window.addEventListener("scroll", function() {
    let menu = document.getElementById("menu");
    if (window.scrollY > 50) {
        menu.classList.add("scroll");
    } else {
        menu.classList.remove("scroll");
    }
});