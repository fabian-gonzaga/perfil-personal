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
