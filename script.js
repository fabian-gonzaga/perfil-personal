const anioactual = new Date().getFullYear(); document.getElementById("anio").textContent = anioactual;

const boton = document.getElementById("btnModo");

boton.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
});

const hora = new Date().getHours();
const saludo = document.getElementById("saludo");

if (hora < 12) {
    saludo.textContent = "¡Buenos días! 👋";
} else if (hora < 19) {
    saludo.textContent = "¡Buenas tardes! 👋";
} else {
    saludo.textContent = "¡Buenas noches! 👋";
}